import React, { Fragment } from 'react'
import Link from 'next/link'

import Axios from 'axios';
import '../static/style/home.less'

import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '+57',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+57</Option>
          
        </Select>,
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        
        <Row className="registration-form">
            <Col span = {8}></Col>
            <Col span = {8}>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                  <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ],
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          validator: this.validateToNextPassword,
                        },
                      ],
                    })(<Input.Password />)}
                  </Form.Item>
                  <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        {
                          validator: this.compareToFirstPassword,
                        },
                      ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                  </Form.Item>
                  <Form.Item
                    label={
                      <span>
                        Username 
                        
                      </span>
                    }
                  >
                    {getFieldDecorator('nickname', {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input />)}
                  </Form.Item>
                  
                  <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                  </Form.Item>
                  
                  
                  <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>
                        I have read the <a href="/terms">agreement</a>
                      </Checkbox>,
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
            </Col>
            <Col span={8}></Col>
        </Row>
        
      );
    }
  }
  
const Signin= Form.create({ name: 'register' })(RegistrationForm);



export default Signin