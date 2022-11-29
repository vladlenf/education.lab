import axios from "axios";

const a = (b) => {
    return JSON.stringify(b)
}

export default class userLogin {
    static async postAll(userData){
        /*for (var value of userData.values()) {
            console.log(value);}*/
        const response = await axios.post("https://educationlab.online/login.php", userData);
        console.log(response)
        return response.data

    }
}