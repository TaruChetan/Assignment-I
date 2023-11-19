import React, { useState, useEffect } from "react";
import timerIcon from "../../assets/timerIcon.png";
import signin from "../../assets/signin.png";
import { Button, Card, Divider, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const { Meta } = Card;

const UserLogin = ({ handleCredentials }) => {
  const onFinish = (values) => {
    handleCredentials(values);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#f2f2f2",
        height: "97vh",
        width: "100%",
      }}
    >
      <Card
        style={{
          width: 500,
          height: "auto",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
        hoverable
        cover={<img alt="example" src={signin} />}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UserLogin;
