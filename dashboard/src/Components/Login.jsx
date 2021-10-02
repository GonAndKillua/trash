import React from "react";
import signupimg from "../img/signup.svg";

export default function Login() {
  return (
    <section class="vh-100" style={{ backgroundColor: "#ffc3a0" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Log in</h3>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX">
                    Password
                  </label>
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Login
                </button>

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="./signup" class="link-danger">
                    Register
                  </a>
                </p>

                <a href="#!" class="link-danger">
                  Forget Password?
                </a>
                <hr class="my-4" />

                <button
                  class="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                >
                  <i class="fab fa-google me-2"></i> Log in with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
