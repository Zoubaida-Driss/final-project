import React from "react";
import NavBar from "./NavBar";

const Login = () => {
  return (
    <div>
      <div>
        <div className="wrapper">
          <div className="main-panel">
            {/* Navbar */}
            <NavBar />
            {/* End Navbar */}
            <div
              style={{
                width: "600px",
                display: "inline-block",
                justifyContent: "center",
                marginBottom: "100px",
                marginTop: "80px",
              }}
            >
              <div class="row">
                <div class="col-12">
                  <div class="card ">
                    <div class="card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            We'll never share your email with anyone else.
                          </small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                            />
                            Option one is this
                            <span className="form-check-sign">
                              <span className="check" />
                            </span>
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
