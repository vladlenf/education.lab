import classes from'./App.css';
import React, {useContext, useState} from 'react';
import Index from "./pages/firstPage";
import MyButton from "./components/UI/button/button";
import Userprofile from "./components/UI/UserProfile/userprofile";
import MyModal from "./components/UI/MyModal/MyModal";

import AddNewTask from "./components/UI/AddNewTask/AddNewTask";
import SendTaskToTeacher from "./components/UI/SendTaskToTeacher/SendTaskToTeacher";
import Notification from "./components/UI/Notification/Notification";
import FirstPage from "./pages/firstPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useCourses} from "./hooks/useCourses";


function FormRegistration() {

}

function App() {
const [modal, setModal] = useState(false);
const [userLogin,setUserLogin] = useState('')
    console.log(userLogin)
  return (

      /*<AddCourse/>*/
      /*<AddNewTask/>*/
      /*<SendTaskToTeacher>ASDASD</SendTaskToTeacher>*/
      /*<MyButton onClick={
          <Notification flag={1}>asdsa</Notification>
      }> dsadsa
      </MyButton>*/
      /*<Userprofile/>*/
      /*/!*<*!/FirstPage/>*/

          <BrowserRouter>

              <AppRouter/>
          </BrowserRouter>






  );
}

export default App;
