import React, { useState } from "react";
import {
  Layout,
  Col,
  Row,
  Typography,
  Form,
  Input,
  Divider,
  Alert
} from "antd";
import {Button, Box} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const { Title } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formItemLayout = {
    wrapperCol: {
      md: { span: 20 }
    }
  };

  const handleClick= async() => {

    try{
      const response = fetch('http://localhost:8080/api/auth/signin', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify ({
         "username": email,
         "password": password
        })
       }).then((response)=> console.log(response.status));
       
  
    }
    catch(err)
    {
        console.log(err);
    }
  }
  
            

  return (
    <Box  display="flex" 
    width={1250} height={500} 
    alignItems="center"
    justifyContent="center">
    <Layout>
      <LockOutlinedIcon alignItems='center'/>
      <Row>
        <Col span={24}>
          <Title level={2}>Sign in</Title>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <Form {...formItemLayout}>
            <Form.Item>
              <Input
                type="text"
                placeholder="E-Mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Button variant="contained" className="login-form-button" onClick=  {handleClick}>
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      
    </Layout>
    </Box>
  );
};

export default Login;
