import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './index.module.less';
import { useMutation } from 'react-query';
import { getLogin } from '@/services/user';

const login = () => {
  const { mutate } = useMutation(getLogin);

  const onFinish = async (values: { phone: number; password: string }) => {
    try {
      await mutate(values);
    } catch (error) {}
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <Form
          name='login'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label='手机号'
            name='phone'
            rules={[{ required: true, message: '请输入手机号!' }]}
          >
            <Input type='number' />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div className={styles.submit}>
              <Button block type='primary' htmlType='submit'>
                登录
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default login;
