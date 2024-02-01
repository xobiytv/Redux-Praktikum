import axios from 'axios'
import {getItem} from '../helpers/persistance-store' 

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use(config => {
   const token = getItem('token')
   const authorization = token ? `Token ${token}` : ''
   config.headers.Authorization = authorization
   // return console.log(config.headers);
   return config
   
})

export default axios