import './login.css'
import {Button, Form, Input} from 'antd';
import {$login} from '../api/adminApi'
export default function Login() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        $login().then(r => console.log(r))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const cancelBtn=()=>{
        form.resetFields()
    }

    return (
        <div className='login'>
            <div className={'content'}>
                <h2>酒店后台管理系统</h2>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号！',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button onClick={cancelBtn} style={{marginLeft:'10px'}}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}