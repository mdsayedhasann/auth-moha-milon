import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Login = () => {

  const {signInUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
        .then(result =>{
          console.log('result');
        })
        .catch(error => {
          console.error(error)
        })
        console.log(email, password);
    }
  return (
    <div className="flex flex-col items-center ">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-8">Login now!</h1>
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
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
              </div>
            </form>
            <div className="text-center">
              <p>New to Auth Moha Milon?</p>
              <Link to='/register'><button className="text-center text-blue-600">Register</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
