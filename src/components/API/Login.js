import axios from "axios";



export default class userLogin {
    static async postAll(userData){
        const response = await axios.post("https://educationlab.online/login.php", userData);
        console.log(response)
        return response.data
    }
}