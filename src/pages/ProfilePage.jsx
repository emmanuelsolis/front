import { useState } from 'react'
import { Layout, Avatar, Descriptions, Form, Button, Upload, message } from 'antd'
import { FormItem } from '../components'
import { UploadOutlined } from '@ant-design/icons';
import { editUsernWs } from '../services/user-ws';
const { Content } = Layout


export default function ProfilePage(props) {
    const [isEdit, setIsEdit] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    //{user,handleLogout, authentication}
    const configUpload = {
        name: 'image',
        action: 'http://localhost:5005/api/upload/single',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                console.log("que es info", info);
                setImageUrl(info.file.response.url.uri)
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    }
    const onFinish = (values) => {
        console.log("Success:", values);    
        editUsernWs({ ...values, imageUrl })
            .then(res => {
                const { status, data, errorMessage } = res;
                console.log("este es el Res:",res)
                    console.log("las PROPS", props.user.firstN_name, props.user.last_name)

                if (status) {
                    props.authentication(data.user);
                } else {
                    console.log("Error actualizar", errorMessage)
                }
            })
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Content>
            {/* Avatar o un tag img para mostrar la imagen del usuario */}
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={props.user.imageUrl}
            />
            <Button onClick={() => setIsEdit((prevState) => !prevState)}>
                Editar perfil
            </Button>
            {/* Puede ser una card para mostrar informacion del usuario */}
            {isEdit ? "se puede editar" : "no se puede"}
            {/* {isEdit ? "poner los inputs" : "descripcion"} */}
            {/* Modal */}
            <Descriptions title="User Info">
                <>
                    <Descriptions.Item label="Nombre">{`${props.user.first_name} ${props.user.last_name}`}</Descriptions.Item>
                    <Descriptions.Item label="email">{props.user.email}</Descriptions.Item>
                    <Descriptions.Item label="rol">{props.user.role}</Descriptions.Item>
                </>
            </Descriptions>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <FormItem
                    label="Nombre"
                    name="first_name"
                />
                <FormItem
                    label="Apellido"
                    name="last_name"
                />
                <FormItem
                    label="Correo"
                    name="email"
                    disabled
                    value={props.user.email}
                />

                <FormItem label="role" name="role" disabled value={props.user.role} />

                <Upload {...configUpload}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>

                <FormItem
                    button_text="editar"
                    type="button"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                />
            </Form>
        </Content>
    )
}
