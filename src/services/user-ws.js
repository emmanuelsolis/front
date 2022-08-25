//import api // default donde tengo mi URL baseURL
import { api } from './api'
import {succcesStatus, internalServerError} from '../utils/format-response'


export const editUsernWs = (data) => 
api.patch("/user/edit-profile", data)//lefalta .then y .catch
.then(succcesStatus)
.catch(internalServerError)