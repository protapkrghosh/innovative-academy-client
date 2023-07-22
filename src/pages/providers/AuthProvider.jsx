import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [users, setUsers] = useState(null);

   const registerUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const describe = onAuthStateChanged(auth, (usersInfo) => {
         setUsers(usersInfo);
         setLoading(false)
      })
      return () => {
         return describe();
      }
   }, [])

   const googleSign = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
   }

   const userLogOut = () => {
      setLoading(true)
      return signOut(auth);
   }

   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   const authInfo = {
      users,
      loading,
      signIn,
      googleSign,
      userLogOut,
      registerUser,
      updateUserProfile,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
