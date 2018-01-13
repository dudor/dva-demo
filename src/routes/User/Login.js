import React, {Component} from 'react'
import {connect} from 'dva'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import styles from './Login.css'
import PropTypes from 'prop-types';

const FormItem = Form.Item;

@connect(({loading}) => ({loading}))
@Form.create()
export default class LoginPage extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {dispatch} = this.props;
        dispatch({
          type: 'login/login',
          payload: values
        });
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={styles.loginForm}>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem hasFeedback key="1">
            {getFieldDecorator('userName', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem hasFeedback key="2">
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem key="3">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox key="4">Remember me</Checkbox>
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

LoginPage.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.func
}

// export default Form.create()(LoginPage)
