import { Form, Modal} from "antd";
import { FormItem } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
//me traigo mis servicios !! LoginWS SignupWS
import { loginWs, signupWs } from "../services/auth-ws";
const AuthPage = (props) => {
  //utilizo el Hook useLocation
  const location = useLocation()
  const navigate = useNavigate()


  const onFinish = (values) => {
    if(location.pathname === "/signup" && values.password !== values.confirmPassword){
      return Modal.error({content:"hey que paso las contraseñas no coinciden"})
    }
    //forma dinamica
    const service = location.pathname === "/signup" ? signupWs(values) : loginWs(values)

    service.then(res => {
      const {data, status, errorMessage} = res;
      if(status ){
        
        props.authentication(data.user)
          Modal.success({content:'todo chido ya pudiste entrar'})
          navigate("/profile")
      }else {
        //pueden guardar el errorMessa en un state para mostrarlo en el html
        Modal.error({content:errorMessage})
      }
    })
      
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        {/* con mas de dos elementos */}
        {location.pathname === "/signup" ?
        <>
          <FormItem
          label="Nombre"
          name="firstName"
          type="text"
          />
          <FormItem
          label="Apellido"
          name="lastName"
          type="text"
          />
        </>  : null}
      <FormItem
        label="Correo"
        name="email"
        type="text"
        rules={[
          {
            required: true,
            message: "Coloca tu correo!",
          },
        ]}
      />
      <FormItem
        label="Contraseña"
        name="password"
        type="password"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu contraseña!",
          },
        ]}
      />
      {/* && */}
      {location.pathname === "/signup" && <FormItem 
      label="Confirma tu contraseña"
      name="confirmPassword"
      type="password"
      rules={[
        {
          required: true,
          message: "Por favor ingresa tu contraseña nuevamente!",
          },
          ]}
      />}

      <FormItem
        button_text="Enviar"
        type="button"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      />
      
      {location.pathname === "/signup" ?
      <p>Si ya tienes cuenta   <Link to="/login">ingresa!</Link></p>
      :
      <p>Si aun no tienes cuenta   <Link to="/signup">registrate!</Link></p>
      }
    </Form>
  );
};

export default AuthPage;
