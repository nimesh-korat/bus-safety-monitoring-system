import React from "react";
import axios from "axios";

function Page_login() {
  axios.defaults.withCredentials = true;

  //storing login data from input fields
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
    role: "0"
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(loginData);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/login", loginData);
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message)
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-form-bg d-flex align-items-center vh-100">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="form-input-content">
                <div className="card login-form mb-0">
                  <div className="card-body pt-5 text-center">
                    <h4>Bus Safety</h4>

                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          value={loginData.email}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          value={loginData.password}
                          required
                        />
                      </div>
                      <button className="btn login-form__btn submit w-100">
                        Sign In
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***********************************
  Scripts
    ************************************/}
    </>
  );
}

export default Page_login;
