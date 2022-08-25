import { useState, useEffect } from 'react'
import './App.css';
//iportar las rutas a utilizar
import routes from "./config/routes"
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Navbar } from './components';
import { logoutWs } from './services/auth-ws';
import { Modal } from 'antd';
//Importar los componentes o funciones globales

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  console.log("navigate", navigate);
  //funciones globales!
function authentication(user){
  setUser(user)
}
function handleLogout(){
    Modal.confirm({
      title: "Cerrar sesion",
      content: "¿Estas seguro que quieres cerrar sesion?",
      onOk(){
      //ejecutar el endpoint para hacel logout y borrar al usuario del stat!
      logoutWs().then(res=>{
        const {data,status,errorMessage} = res
        
        if(status){
          Modal.success({
            content: data.successMessage,
          });
          navigate("/")
          setUser(null)
        }else{
          alert(errorMessage)
        }
      })
    }
  })
}
  return(
    <div className="app">
      <Navbar user={user} handleLogout={handleLogout}/*{...{user,handleLogout}}*//>
      <Routes>
        {routes({user,handleLogout, authentication})
        .map(({path, element}, index_route) => 
        <Route key={path} {...{path,element}}/>)}
      </Routes>
    </div>
  )
}


  export default App;
