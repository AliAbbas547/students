
import UserLogin from "./Students/UserLogin";
import UserRegister from "./Students/UserRegister";
import GetUserData from "./Students/GetUserData";
import HomePage from "./Students/HomePage";
import ReactDOM from 'react-dom/client';
import UpdateData from "./Students/UpdateData";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/userRegistration" element={<UserRegister/>}/>
      <Route path="/userLogin" element={<UserLogin/>}/>
      <Route path="/getUserData" element={<GetUserData/>}/>
      <Route path="/updateData" element={<UpdateData/>}/>


      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
