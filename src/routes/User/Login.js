import React, { Component } from 'react'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './Login.css'
import PropTypes from 'prop-types';

const FormItem = Form.Item;

@connect(state => ({ state }))
@Form.create()
export default class LoginPage extends Component {
  LoginPage () {
    console.log("login page",this.props)
    const {loading} = this.props
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginForm}>
        <Form className="login-form">
          <FormItem hasFeedback key="1">
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem hasFeedback key="2">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem key="3">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className={styles.loginFormForgot} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

// export default Form.create()(LoginPage)
