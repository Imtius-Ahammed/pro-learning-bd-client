import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Header from "../../Shared/Header/Header";

const Login = () => {
  const{providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleLogin =()=>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>console.error(error))

  }
  return (
    <div>
      <Header></Header>

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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
               <div>
               <button onClick={handleGoogleLogin} className="btn btn-primary">Login with Google</button>
                <button className="btn btn-primary">Login with GitHub</button>
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
