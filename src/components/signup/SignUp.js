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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [lastName, setLastName] = useState("");

  const [firstName, setfirstName] = useState("");

  const [contactNumber, setContactNumber] = useState("");

  const formItemLayout = {
    wrapperCol: {
      md: { span: 20 }
    }
  };

  const handleClick= async() => {

    try{
      const response = fetch('http://localhost:8080/api/auth/signup', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify ({
         "firstName": firstName,
         "lastName": lastName,
         "email" : email,
         "password" : password,
         "confirmPassword" : confirmPassword,
         "contactNumber" : contactNumber
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
                placeholder="First Name*"
                onChange={e => setfirstName(e.target.value)}
                value={firstName}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="Last Name*"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Item>
         
            <Form.Item>
              <Input
                type="text"
                placeholder="Email Address*"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Password*"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                placeholder="Confirm Password*"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="Contact Number*"
                onChange={e => setContactNumber(e.target.value)}
                value={contactNumber}
              />
            </Form.Item>
            <Form.Item>
              <Button variant="contained" className="login-form-button" onClick=  {handleClick}>
                SIGN UP
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      
    </Layout>
    </Box>
  );
};

export default SignUp;
