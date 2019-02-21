import axios from 'axios';

const BASE_URL = 'http://localhost:7777';

export class BookService {

    getBookDetail(text) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${BASE_URL}/book/search?text=${text}`)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                })
                .catch(error => reject(error.message));
        });
    }
}