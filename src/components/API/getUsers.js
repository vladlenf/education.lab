import axios from "axios";


export default class getUsers {
    static async getAll(){
        try {
            const response = await axios.get('https://educationlab.online/check_users.php/')
            return response.data
        }
        catch (e){
            console.log(e);
        }
    }
}


