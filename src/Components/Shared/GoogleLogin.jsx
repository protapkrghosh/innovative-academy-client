import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from);
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Login has been successful",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full bg-transparent border border-blue-500"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default GoogleLogin;
