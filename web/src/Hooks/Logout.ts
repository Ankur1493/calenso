import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { removeCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ErrorResponse } from "../interfaces/interfaces";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logout(undefined).unwrap();
      dispatch(removeCredentials(undefined));
      navigate("/register");
      toast.success(res.message);
    } catch (err) {
      const errorResponse = err as ErrorResponse;
      toast.error(errorResponse.data?.message || errorResponse.error);
    }
  };

  return { handleLogout };
};

export default Logout;
