import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="fixed top-[50%] left-[50%]">
        <RingLoader color="#008e48" loading size={91} speedMultiplier={2} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      state={{ from: location }}
      to="/user/login"
      replace={true}
    ></Navigate>
  );
};

export default PrivetRoute;
