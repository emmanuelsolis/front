import { Form, Input, Button } from "antd"
/* label="Correo"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
 */
const renderItem = (props) => {
  console.log("props: ", props.name);
  switch (props.type) {
    case 'password':
      return <Input.Password />

    case 'button':
      return <Button
        type="primary"
        htmlType="submit"
      >{props.button_text}</Button>

    default:
      return <Input />
  }
}
const FormItem = (props) => (
  <Form.Item{...props}>{renderItem(props)}</Form.Item>
)

export default FormItem