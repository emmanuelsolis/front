//import api // default donde tengo mi URL baseURL
import { api } from './api'
import {succcesStatus, internalServerError} from '../utils/format-response'

//Rutas para mis ednpoints
                    //data = {email:dylan@gamail, password:password}
//login            <//http://tindderperritos /api>/auth/login
export const loginWs = (data) => api.post("/auth/login", data)//lefalta .then y .catch
.then(succcesStatus)
.catch(internalServerError)
//Signup
export const signupWs = (data) => api.post("/auth/signup", data)//lefalta .then y .catch
.then(succcesStatus)
.catch(internalServerError)
//Logout
export const logoutWs = () => api.get("/auth/logout")//lefalta .then .catch
.then(succcesStatus)
.catch(internalServerError)