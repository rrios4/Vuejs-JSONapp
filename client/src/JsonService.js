import axios from 'axios';

const url = 'http://localhost:5000/api/persons/';

class JsonService {
    // Get Json Files
    static getJson(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
            resolve(
                data.map(person => ({
                    ...person
                }))
            )
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
}
console.log(JsonService.getJson())
export default JsonService