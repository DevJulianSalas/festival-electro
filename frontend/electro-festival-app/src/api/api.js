/**
 * Export Axios object to client
*/

//Axios package
import axios from 'axios';

const ApiClient =  {
  Api() {
    const client = axios.create({
      baseURL: 'http://172.18.0.4:3000/api/v1/'
    });
    return client
  }
}

export default ApiClient.Api();