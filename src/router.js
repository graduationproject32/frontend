import { createHashRouter } from "react-router-dom";
import "./App.module.scss";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Auth from "./pages/auth/Auth";
import Upload from "./pages/Upload";
import Interview from "./pages/Interview";
import { requireLoggedOut } from "./pages/auth/Auth";
import { requireAuth } from "./pages/auth/Auth";
import InterviewResult from "./pages/InterviewResult";
const router = createHashRouter([
  {
    path: "",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "auth/:mode",
        element: <Auth></Auth>,
        loader: requireLoggedOut,
      },
      {
        path: "upload",
        element: <Upload></Upload>,
        loader: requireAuth,
      },
      {
        path: "interview",
        element: <Interview></Interview>,
        loader: requireAuth,
      },
      {
        //there should be a parameter here interview/result:id
        //will implement when things are patched up with backend
        path: "interview/result",
        element: <InterviewResult></InterviewResult>,
        loader: requireAuth,
      },
    ],
  },
]);
export default router;
