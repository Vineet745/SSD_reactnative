import axios from "axios"
import { getToken } from "../utils/token";


const instance = axios.create({
    baseURL:"http://stagingapi.shreesaidarshan.com/api/",
    headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout:60000,
      timeoutErrorMessage:'Request Timed Out'
})

instance.interceptors.request.use(
  async config => {
        const token = await getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
   error =>{
    Promise.reject(error)
   }
)


export default instance;