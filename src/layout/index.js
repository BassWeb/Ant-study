import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

const { Header, Footer, Sider, Content } = Layout;

//引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    
    render(){
        const child = this.props.children;
        console.log(React.Children.count(child));

        console.log(this.props.children);
        return (            
            <Layout>
            <Sider width={256} style={{ minHeight:'100vh', color: '#ffffff'}}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/helloworld">
                            <Icon type="pie-chart" />
                            <span>Helloworld</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                        <Menu.Item key="2">分析页</Menu.Item>
                        <Menu.Item key="3">监控页</Menu.Item>
                        <Menu.Item key="4">工作台</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2">
                        <Link to="/card">
                            <Icon type="pie-chart" />
                            <span>卡片页面</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background:'#fff', textAlign:'center', padding: 0}}>Header</Header>
                <Content style={{ margin: '24px 16px 0'}}>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign:'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            </Layout>                
        )
    }
}

export default BasicLayout;