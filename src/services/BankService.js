import axios from 'axios';

const BASE_URL = 'http://localhost:7777';

export class BankService {

    getBankDetail(key, text) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${BASE_URL}/bank/search?key=${key}&text=${text}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                })
                .catch(error => reject(error.message));
        });
    }

}