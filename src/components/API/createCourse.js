import axios from "axios";

export default class CreateCourse {
    static async postAll(courseData){
        const response = await axios.post("https://educationlab.online/create_course.php", courseData)
        return response.data
    }
}