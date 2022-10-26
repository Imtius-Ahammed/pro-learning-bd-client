import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import Header from "../../Shared/Header/Header";



const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { signIn, providerLogin,gitSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
 
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        form.reset();
        setError("");
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

 const handleGithubSignIn =()=>{
  gitSignIn(githubProvider)
  .then(result =>{
    const user = result.user;
    console.log(user);
  })
  .catch(error=>{
    console.error('error:',error)
  })

 }
  return (
    <div>
      <Header></Header>

      <Form onSubmit={handleSignIn}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  btn-primary">Login</button>
                  <div className="flex items-center">
                   <div> 
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-primary"
                    >
                      Login with Google
                    </button>
                    </div>
                   
                    <div>
                    <button onClick={handleGithubSignIn} className="btn btn-primary">
                      Login with GitHub
                    </button>

                    </div>
                  </div>
                  <div className="toast">
                    <div className="alert alert-info bg-red-500">
                      <div>
                        <span className="text-2xl font-medium">{error}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
