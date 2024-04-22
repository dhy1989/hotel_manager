import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import './layout.css'
const { Header, Sider, Content } = Layout;
export  default  () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className={'layout'}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >{collapsed?'Bing':'Bing酒店管理系统'}</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: '账户管理',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: '客房管理',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: '客户管理',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className={'header'}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            color:'white'
                        }}
                    />
                </Header>
                <Content
                    className={'content'}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};