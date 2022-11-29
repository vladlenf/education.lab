import axios from "axios";

export default class registrationUsers {
    static async postAll(userData){
            /*for (var value of userData.values()) {
                console.log(value);}*/
            axios({
                method: "POST",
                url: "https://educationlab.online/registration.php",
                data: userData,
            }).then(function(response) {
                console.log('Ответ сервера успешно получен!');
                console.log(response.data);
            }).catch(function(error) {
                    console.log(error);
            });
    }
}