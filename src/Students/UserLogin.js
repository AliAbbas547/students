import axios from "axios";
import React, { useState } from "react";


function UserLogin() {
  const [data, setData] = useState({
    name: " ",
    subject: " ",

  });

  const createData = async (e) => {
    try {
      e.preventDefault();

      console.log("hello", data);

      let t1=  await axios.post("http://localhost:3001/login", data);


       console.log(t1.data.data)
       localStorage.setItem("token", t1.data.data)
       localStorage.setItem("userId",t1.data.userId)
    let t2= localStorage.getItem("token")
    console.log(localStorage.getItem("userId"))
    
    console.log(t2)
       alert("successfully login..")

    } catch (err) {
      alert(err.response.data.message);
      console.log(err.message);
      
    }
  };

  return (
    <div>

      <section className="vh-100" style={{backgroundColor: "pink"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt="login form" className="img-fluid" style={{borderRadius: "4rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={(e) => createData(e)} >

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "blue"}}></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="text" id="form2Example17" className="form-control form-control-lg" value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })} />
                    <label className="form-label" htmlFor="form2Example17">Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form2Example27" className="form-control form-control-lg"  value={data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}  />
                    <label className="form-label" htmlFor="form2Example27">Subject</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <input type="submit" className="btn btn-dark btn-lg btn-block" />
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: "blue"}}>Don't have an account? <a href="/userRegistration"
                      style={{color: "black"}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}
export default UserLogin;
