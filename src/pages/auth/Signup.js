import "./Signup.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = ({ authenticate }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    level: "",
    position: "",
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
          username: formState.username,
          email: formState.email,
          password: formState.password,
          level: formState.level,
          position: formState.position,
        },
      },
      "register"
    );
  };
  return (
    <>
      <div className="d-flex flex-column height100">
        <section className="d-flex flex-grow-1 align-items-stretch">
          <div className="container-fluid p-0 d-flex flex-wrap justify-content-center">
            <div className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
              <div className="form-container">
                <h2>Create a free account now</h2>
                <span>
                  Already Have an account? <Link to="/auth/login">login</Link>
                </span>
                <form
                  onSubmit={handleFormSubmit}
                  className="d-flex flex-column align-items-center"
                >
                  <input
                    value={formState.username}
                    onChange={onChange}
                    placeholder="your name"
                    type="text"
                    name="username"
                  />
                  <input
                    value={formState.email}
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <input
                    value={formState.password}
                    onChange={onChange}
                    placeholder="Password"
                    type="password"
                    id="pass"
                    name="password"
                  />
                  <select
                    onChange={onChange}
                    className="form-select"
                    aria-label="Default select example"
                    name="level"
                  >
                    <option value="CareerLevel" disabled>
                      Career Level
                    </option>
                    <option value="fresh">Fresh</option>
                    <option value="junior">Junior</option>
                    <option value="midlevel">Mid-Level</option>
                    <option value="senior">Senior</option>
                  </select>
                  <input
                    value={formState.position}
                    onChange={onChange}
                    placeholder="Last Position"
                    type="text"
                    id="position"
                    name="position"
                  />

                  <input className="btn-hover" type="submit" value="Sign Up" />
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-4 right_sidebar signup_right_sidebar d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                <h2>Reviewing your resume has never been easier</h2>
                <p>
                  With our Ai powered analysis you’ll get helpful insights to
                  enhance your resume
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SignUp;
