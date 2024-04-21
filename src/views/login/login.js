import './login.css'
import {Button, Form, Input} from 'antd';
import {$login} from '../../api/adminApi'
import MyNotification from "../../components/MyNotification";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
export default function Login() {
    const childRef = useRef(null);
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
         let {data,status}= await $login()
         console.log(data,status)
        if(values.username==='admin'&&values.password==='123456'){
            childRef.current.childMethod({type:'success',description:'你好呀'});
            navigate('/layout')
        }else{
            childRef.current.childMethod({type:'error',description:'账号或密码错误'});
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const cancelBtn = () => {
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
                        <Button onClick={cancelBtn} style={{marginLeft: '10px'}}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <MyNotification ref={childRef}/>
        </div>
    )
}