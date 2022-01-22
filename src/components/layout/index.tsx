/**
* date: 2022-01-22, Sat, 22:20
* author: TooZhun9
* feature： layout Component, base layout of the app
*/
import {Breadcrumb, Layout, Menu} from "antd";
import React, {useCallback, useState} from "react";
import {DesktopOutlined, FileOutlined} from "@ant-design/icons";
import {useLocation} from "react-router";

const menus = [{
    id: 1,
    name: 'Live Scores',
    path:'/scores',
    icon: <FileOutlined/>
}, {
    id: 2,
    name: 'Push Event',
    path:'/scores',
    icon: <DesktopOutlined/>
}
]

const { Content, Footer, Sider} = Layout;


const ContentPage = ({children}: { children?: JSX.Element }) => {

    const [collapsed, onCollapse] = useState(false)

    const {pathname:PATH_NAME}= useLocation()

    const name = useCallback(
        (path)=>{

            return menus.filter(item=>item.path===path||path==='/')[0]
        },[]
    )


    return (<Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    menus.map(item => {
                        return (<Menu.Item key={'' + item.id} icon={item.icon}>
                            {item.name}
                        </Menu.Item>)
                    })
                }
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Content style={{margin: '0 16px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>{name(PATH_NAME).name}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    <div className="App">
                        <div className='container'>
                            {children}
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Leader Board Scores 2022</Footer>
        </Layout>
    </Layout>
    )

}

export default ContentPage

