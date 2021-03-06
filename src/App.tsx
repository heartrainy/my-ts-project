import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import routes from './routers/routes'

const { Header, Sider, Content } = Layout
const menuConfig: any[] = [
  {key: 1, path: '/users', text: '用户', icon: 'user'}
]

// interface
interface Props {

}
interface State {
  readonly collapsed: boolean
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  public render() {
    return (
      <section id="app">
        <Layout className="sys-layout">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {
                menuConfig.map((menu: any) => {
                  return (
                    <Menu.Item key={menu.key}>
                      <Icon type={menu.icon} />
                      <span>{menu.text}</span>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Router>
                <Switch>
                  {routes.map((route: any, index: number) => (
                    (
                      <Route
                        key={index}
                        path={route.path}
                        render={props => (
                          <route.component {...props} routes={route.routes} />
                        )}
                      />
                    )
                  ))}
                </Switch>
              </Router>
            </Content>
          </Layout>
        </Layout>
      </section>
    )
  }
}
export default App