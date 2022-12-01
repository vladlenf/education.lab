import axios from "axios";


export default class getCourses {
    static async getAll(){
        try {
            const response = await axios.get('https://educationlab.online/list_of_courses.php/')
            /*console.log(response.data)*/
            return response.data

        }
        catch (e){
            console.log(e);
        }
    }
}