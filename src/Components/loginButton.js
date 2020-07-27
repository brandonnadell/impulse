import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    let user = response;
  }

const Login = (props) => {
    const [value, setValue] = useState("");
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export {Login}
