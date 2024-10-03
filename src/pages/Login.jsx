import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../util/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const[username,setUserName] = useState('');
const [password,setPassword] = useState('');
const {login} = useAuth();
const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username,password);
        login(username, password, navigate);
        // login(username, password);


        // const formData = new FormData();
        // formData.append("username",username);
        // formData.append("password",password);
    }
  return (



    <Form className='w-25' onSubmit={handleSubmit}>



      <Form.Group  className="mb-3 " controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name='username' value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Username" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="password">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />

      <Button type="submit">Submit</Button>
      </Form.Group>



    </Form>
  )
}

export default Login

// CODE FOR CUSTOM TEXT AREA


{/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>Example textarea</Form.Label>
<Form.Control as="textarea" rows={3} />
</Form.Group> */}




