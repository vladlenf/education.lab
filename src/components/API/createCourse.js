import axios from "axios";

export default class registrationUsers {
    static async postAll(courseData){
        const response = await axios.post("https://educationlab.online/createCourse.php",courseData)
        return response.data
    }
}