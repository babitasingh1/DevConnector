import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  //console.log(registeredUser);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log(registeredUser);

    const newUser = {
      email,
      password,
    };

    console.log(newUser);

    //const loginToken = registeredUser.find(element => element.email=newUser.email);
    //console.log(loginToken);

    try {
      const config = {
        headers: {
          'x-auth-token':
            '',
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(newUser);
      console.log(body);
      const res = await axios.post('/api/auth', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.res.data);
      alert('invalid credentials');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </Fragment>
  );
};
export default Login;
