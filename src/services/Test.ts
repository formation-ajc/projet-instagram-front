import api from "./Api";

export class TestService {
    testUser = () => {
        try {
            return api.get(process.env.REACT_APP_API_URL + '/test/user');
        } catch (error) {
            console.error(error);
        }
    }

    testAdmin = () => {
        try {
            return api.get(process.env.REACT_APP_API_URL + '/test/admin');
        } catch (error) {
            console.error(error);
        }
    }
}