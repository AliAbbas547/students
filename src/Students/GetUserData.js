import React, { useState } from "react";
import axios from "axios";
import "./GetUserData.css";

function GetUserData() {
  const [data1, setData1] = useState({
    name: "",
    subject: "",
  });
  const [get, setGet] = useState({
    name: false,
    subject: false,
  });
  const [data, setData] = useState([]);
  const getData = async (url) => {
    try {
      let t1 = await axios.get(url,{headers:{"x-api-key":`${localStorage.getItem("token")}`
    }});

      console.log(t1.data.data);
      setData(t1.data.data);
      console.log(get);
      console.log(data1);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="container my-3">
      {/* <button
        className="hello"
        onClick={(e) =>
          getData(
            `http://localhost:3001/getData?${get["name"]}=${data1["name"]}&${get["subject"]}=${data1["subject"]}`
          )
        }
      >
        
        Just Click Here
      </button> */}
      
      <button type="button" class="btn btn-primary" onClick={(e) =>
          getData(
            `http://localhost:3001/getData?${get["name"]}=${data1["name"]}&${get["subject"]}=${data1["subject"]}`
          )
        }  >just Click Here</button>

      <br />
      <br />
      name:
      <input
        value={get.name}
        onChange={(e) => setGet({ ...get, name: "name" })}
        type="checkbox"
        name="hobbies[]"
      />
      subject:
      <input
        value={get.subject}
        onChange={(e) => setGet({ ...get, subject: "subject" })}
        type="checkbox"
        name="hobbies[]"
      />
      <br />
      <br />
      <input
        type="text"
        value={data1.name}
        onChange={(e) => setData1({ ...data1, name: e.target.value })}
      />
      <br />
      <br />
      <input
        value={data1.subject}
        onChange={(e) => setData1({ ...data1, subject: e.target.value })}
      />
      <br />
      <br />
      <div className="container">
        <div className="row">
        {data.length !== 0 &&
          data.map((x) => {
            const { name, subject, marks,_id } = x;
            return (
              <div className="col-3">
                <div className="card" style={{width: "18rem"}}>
  <img src="https://thumbs.dreamstime.com/z/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" className="card-img-top" alt="nature"/>
  <div className="card-body">
    <h5 className="card-title">UserData</h5>
    <h5 className="card-text">name:{name}</h5>
    <h5 className="card-text">subject:{subject}</h5>
    <h5 className="card-text">marks:{marks}</h5>
    <h5 className="card-text">Id:{_id}</h5>
    <a href="#" className="btn btn-primary">Know More</a>
  </div>
</div>
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default GetUserData;
