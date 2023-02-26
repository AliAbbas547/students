import React, { useState } from "react";
import axios from "axios";

function UpdateData() {
  const [data, setData] = useState({
    name: "",
    subject: "",
  });
  const [data1, setData1] = useState({
    name: "",
    subject: "",
    marks: "",
    _id: "",
  });
  const UpdateData = async () => {
    try {
      console.log("hello");
      let newData = { userId: `${localStorage.getItem("userId")}` };
      if (data.name !=="") {
        newData["name"] = data.name;
      }
      if (data.subject !=="") {
        newData["subject"] = data.subject;
      }

      let t1 = await axios.put(
        `http://localhost:3001/update?userId=${localStorage.getItem("userId")}`,
        newData,
        { headers: { "x-api-key": `${localStorage.getItem("token")}` } }
      );
      console.log(t1.data.data);
      let t2 = t1.data.data;
      console.log(typeof t2);
      const { name, subject, marks, _id } = t2;
      setData1({
        ...data1,
        name: name,
        subject: subject,
        marks: marks,
        _id: _id,
      });
      console.log(data1);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container my-3">
      <input
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <br />
      <br />
      <input
        value={data.subject}
        onChange={(e) => setData({ ...data, subject: e.target.value })}
      />
      <br />
      <br />
      
      <button type="button" class="btn btn-primary"  onClick={(e) => UpdateData()} >just click here</button>


      <br />
      <br />
      <div className="conatiner">
        <div className="row">
          {data1.name !== "" && (
            <p>
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://thumbs.dreamstime.com/z/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg"
                    className="card-img-top"
                    alt="nature"
                  />
                  <div className="card-body">
                    <h5 className="card-title">UserData</h5>
                    <h5 className="card-text">name:{data1.name}</h5>
                    <h5 className="card-text">subject:{data1.subject}</h5>
                    <h5 className="card-text">marks:{data1.marks}</h5>
                    <h5 className="card-text">Id:{data1._id}</h5>
                    <a href="#" className="btn btn-primary">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </p>
          )}
          <br />
        </div>
      </div>
    </div>
  );
}

export default UpdateData;
