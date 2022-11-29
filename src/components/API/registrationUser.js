import axios from "axios";

export default class registrationUsers {
    static async postAll(userData){
        const response = await axios.post("https://educationlab.online/registration.php",userData)
        return response.data
    }
}