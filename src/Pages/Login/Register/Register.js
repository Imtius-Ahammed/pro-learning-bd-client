import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Header from "../../Shared/Header/Header";

const Register = () => {
  const{createUser}=useContext(AuthContext);

  const handleSubmit =event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoURL,email,password);

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset()
    })
    .catch(error=>console.error(error));

  }
  return (
    <div>
      <Header></Header>
      <Form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo URL</span>
                </label>
                <input name="photoURL"
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email"
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered" required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Form>
    </div>
  );
};

export default Register;
