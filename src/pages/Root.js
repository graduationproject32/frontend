import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  let navClasses = "navbar navbar-expand-lg ";
  if (path === "auth") navClasses += "authNav";
  else if (path === "") navClasses += "homeNav ";
  else if (
    path === "upload" ||
    path === "interview" ||
    path === "interviewresult"
  )
    navClasses += "darkNav ";
  return (
    <>
      <Navigation navClasses={navClasses}></Navigation>
      <Outlet></Outlet>
      <ToastContainer />
    </>
  );
};
export default Root;
