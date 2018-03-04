/**
 * User endpoint
 *  - CRUD user 
*   - auth user
*/

import Api from './api'



const userCrudApi = {

  create(data) {
    delete data['showPassword']
    return Api.post('users', data)
      .then((res) => {
        console.log("=========================")
        console.log(res.data)
        console.log("=========================")
        return res.data;
      })
      .catch((error) => {
        return error.response.data
      })
  }
}



export default userCrudApi;