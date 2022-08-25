// para formatear los mensajes de error que nos  mande el backend


export function internalServerError(err) {
    // exite?            exite data dentro de response 
    // err = {response {}}
    // err = <html></html>
    // err =  texto codigo {}
    if(err.response && err.response.data && err.response.data.errorMessage) {
        return {
            status:false,
            errorMessage:err.response.data.errorMessage
        }
    }
    return {
    status:false,
    errorMessage: 'Internal Server Error. Please ccheck your server'
    }
}

export function succcesStatus(res){
    return {
        status:true,
        data:res.data
    }
}