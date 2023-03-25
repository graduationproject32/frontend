import axios from "axios";
import { redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API_URL = "https://api.realworld.io/api/users";
  const authenticate = useMutation({
    mutationFn: async (user, action) => {
      const isRegister = action === "register";
      const response = await axios.post(
        API_URL + (isRegister ? "" : "/login"),
        user
      );
      if (response.data) {
        dispatch(login(response.data.user));
        navigate("/");
      }
      console.log(response);
      return response.data;
    },
  });
  const { mode } = useParams();
  return mode === "login" ? (
    <Login authenticate={authenticate}></Login>
  ) : (
    <SignUp authenticate={authenticate}></SignUp>
  );
};

export default Auth;
export const requireAuth = () => {
  if (!localStorage.getItem("user")) return redirect("/auth/login");
  return null;
};
export const requireLoggedOut = () => {
  if (localStorage.getItem("user")) return redirect("/");
  return null;
};
