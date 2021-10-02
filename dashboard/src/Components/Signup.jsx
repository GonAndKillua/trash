import React from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { SignUpUserApi } from "../../Service/api";

export default function Signup() {
  // ####### REACT-HOOK-FORM SETUP #########
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // ########## FORM SUBMIT HANDLER ################
  const onSubmit = async (data) => {
    try {
      const result = await SignUpUserApi(data);
      console.log(result);
      history.push("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div
              class="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="Name"
                          name="Name"
                          {...register("Name", {
                            required: "Name  is required",
                            maxLength: {
                              value: 20,
                              message: "length should be less then 20",
                            },
                          })}
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="tName">
                          Name
                        </label>
                        <span
                          style={{
                            color: "red",
                            paddingTop: ".5rem",
                            display: "inline-block",
                          }}
                        >
                          {" "}
                          {errors.Name && (
                            <i class="bi bi-exclamation-circle-fill"></i>
                          )}
                          &nbsp;
                          {errors.Name?.message}
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="email"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="lastName">
                          E-mail
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">
                      <div class="form-outline datepicker w-100">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          id="password"
                        />
                        <label for="password" class="form-label">
                          Password
                        </label>
                      </div>
                    </div>

                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="usertype"
                          id="usertype"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="usertype">
                          User Type
                        </label>
                      </div>
                    </div>
                    <div class="mt-4 pt-2">
                      <input
                        class="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="/" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
