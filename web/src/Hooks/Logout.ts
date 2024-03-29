import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { removeCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logout().unwrap();
      dispatch(removeCredentials());
      navigate("/register");
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  return { handleLogout };
};

export default Logout;
