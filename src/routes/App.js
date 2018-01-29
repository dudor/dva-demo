import React from 'react';
import {Layout, Menu, Icon, Switch} from 'antd';
import {connect} from 'dva'
import styles from './App.less'

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  changeTheme = () => {
    const {dispatch} = this.props;
    dispatch({type: 'app/switchTheme'});
  }

  render() {
    const {darkTheme,user} = this.props.app;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}/>
          <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
          <div className={styles.switchtheme}>
            <span><Icon type="bulb"/>Switch Theme</span>
            <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={this.changeTheme}/>
          </div>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.button}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.rightWarpper}>
              <div className={styles.button}>
                <Icon type="mail"/>
              </div>
              <Menu mode="horizontal">
                <SubMenu
                  style={{
                    float: 'right',
                  }}
                  title={<span>
              <Icon type="user"/>
                    {user.name}
            </span>}
                >
                  <Menu.Item key="logout">
                    Sign out
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>

          </Header>
          <Content style={{margin: '5px', padding: 24, background: '#fff', minHeight: 280}}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({app}) => ({app}))(App)
