import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLoader } from "react-spinners";
const Login = ({ authenticate }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    authenticate.mutate(
      {
        user: {
          email: formState.email,
          password: formState.password,
        },
      },
      "login"
    );
  };
  return (
    <>
      <div className="login-signup d-flex flex-column height100">
        <section className="d-flex flex-grow-1 align-items-stretch">
          <div className="container-fluid p-0 d-flex flex-wrap justify-content-center">
            <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center">
              <div className="form-container">
                <h2>Login to your account</h2>
                <span>your resume checker is one step away </span>
                <form
                  onSubmit={handleFormSubmit}
                  className="d-flex flex-column align-items-center"
                >
                  <input
                    onChange={onChange}
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={formState.email}
                  />
                  <input
                    onChange={onChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="pass"
                    value={formState.password}
                  />
                  <input className="btn-hover" type="submit" value="Login" />
                </form>
              </div>
              {authenticate.isLoading && (
                <HashLoader className="authSpinner" color="#36d7b7" />
              )}
              {authenticate.isError && (
                <div className="alert alert-danger" role="alert">
                  Invalid Credentials
                </div>
              )}
            </div>

            <div className="col-12 col-lg-4 right_sidebar login_right_sidebar d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <h2>New Here?</h2>
                <p>Sign Up now to experience our service</p>
                <Link className="btn-hover" to="/auth/register">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
