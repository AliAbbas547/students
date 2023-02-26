import axios from "axios";
import React, { useState } from "react";


function UserRegister() {
  const [data, setData] = useState({
    name: "",
    subject: "",
    marks: "",
  });

  const createData = async (e) => {
    try {
      e.preventDefault();

      console.log("hello", data);

       await axios.post("http://localhost:3001/user", data);

      setData({
        name: "",
        subject: "",
        marks: "",

      });

      alert("successfully submitted");
    } catch (err) {
      alert(err.message);
      console.log(err.message);
      console.log(Response.message);
    }
  };

  return (
    <div>

      <section className="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://media.istockphoto.com/id/960334174/photo/adorable-baby-in-front-of-big-thick-book-studio-shot.jpg?b=1&s=170667a&w=0&k=20&c=g3DvGlYXgCmRr2oHFATl8SiNygDX2jSR9k9SR-uH5Jk="
            className="w-100" style={{borderTopleftRadius: ".3rem", borderTopRightRadius: ".3rem",height:"300px",width:"50px"}}
            alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className="px-md-2" onSubmit={(e)=>createData(e)} >

            <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control"  value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}  />
                <label className="form-label" htmlFor="form3Example1q">Name</label>
              </div>

              <div className="form-outline mb-4">
              
                <input type="text" id="form3Example1q" className="form-control"  value={data.subject}
            onChange={(e) => setData({ ...data,subject: e.target.value })} />
                <label className="form-label" htmlFor="form3Example1q">Subject</label>
              </div>              
      
              <div className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control"  value={data.marks}
            onChange={(e) => setData({ ...data,marks:e.target.value })}  />
                <label className="form-label" htmlFor="form3Example1q">Marks</label>
              </div>
              <br/>
              <br/>              


              <input type="submit" className="btn btn-success btn-lg mb-1"/>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>








</div>
)
}

     export default UserRegister;