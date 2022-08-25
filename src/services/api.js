/* Este archivp es para crear la instancia de axios y para mandar nuestras peticiones */
import axios from 'axios'


//crear una const para validar si mi aplicacion esta en produccion o esta en local

const isProduction = process.env.NODE_ENV === 'production';


//validar si la app ya esta en produccion  hara peticion a heroku
                                                                        //produccion                    develop
const baseURL =  isProduction ? 'https://tindderperritos.herokuapp.com/api' : 'http://localhost:5005/api';


export const api = axios.create({
    baseURL, 
    withCredentials:true,
    timeout: 10000
})


//api.post("/laruta")