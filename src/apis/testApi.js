import axios from "axios";

export const testApi = async () => {
    const sentData = {
        // id: '1'
        // name: 'John Doe',
        // username: 'johndoe',
        // email: 'johndoe@example.com',
    };

    const responseData = await axios
        .get('https://jsonplaceholder.typicode.com/users', sentData)
        .then((response) => {
            console.log('response.data : ' + response.data);
            return response.data;
        }).catch((err) => {
            return err.response;
        });
    return responseData;
}