export const useFetchUsers = () => {
    fetch('https://educationlab.online/check_users.php/', {
        method: "Get",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}