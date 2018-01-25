const jwt = require('jwt-simple')
const moment = require('moment')


function createToken (user) {
  const payload = {
      sub: user.username,
      iat: moment().unix(), 
      exp: moment().add(14, 'days').unix(),
  }
  return jwt.encode(payload, process.env.SECRET_JWT)
}


function decodeToken (token) {
  const decode = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, process.env.SECRET_JWT)
      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'Token has expired'
        })  
      }
      resolve(payload.sub)
    } catch (error) {
      reject({
        status: 500,
        message: 'invalid Token'
      })
      
    }  
  })
  return decode
}


module.exports = {
  createToken,
  decodeToken
}