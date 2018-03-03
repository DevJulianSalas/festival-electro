/**
 * Export Axios object to client
*/

//Axios package
import axios from 'axios';

const ApiClient =  {
  Api() {
    const client = axios.create({
      baseURL: '172.18.0.4',
      port: 3030
    })
  }

 }