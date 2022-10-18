import classes from'./App.css';
import React, {useState} from 'react';
import Index from "./components/UI/firstPage";
import MyButton from "./components/UI/button/button";
import Userprofile from "./components/UI/UserProfile/userprofile";
import MyModal from "./components/UI/MyModal/MyModal";
import AddKurs from "./components/UI/AddKurs/AddKurs";
import AddNewTask from "./components/UI/AddNewTask/AddNewTask";
import SendTaskToTeacher from "./components/UI/SendTaskToTeacher/SendTaskToTeacher";
import Notification from "./components/UI/Notification/Notification";
import FirstPage from "./components/UI/firstPage";
import CoursePage from "./components/UI/CoursePage/CoursePage";



function FormRegistration() {

}

function App() {
const [modal, setModal] = useState(false);


  return (
      /*<AddKurs/>*/
      /*<AddNewTask/>*/
      /*<SendTaskToTeacher>ASDASD</SendTaskToTeacher>*/
      /*<MyButton onClick={
          <Notification flag={1}>asdsa</Notification>
      }> dsadsa
      </MyButton>*/
      /*<Userprofile/>*/
      <FirstPage/>
      /*<CoursePage/>*/


  );
}

export default App;
