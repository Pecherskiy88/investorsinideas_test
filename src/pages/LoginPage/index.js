import React from 'react';
import GoogleLogin from 'react-google-login';

import Header from '../../components/Header';

const responseGoogle = (response) => {
  localStorage.setItem('user', JSON.stringify(response.profileObj));
};

const LoginPage = () => {
  return (
    <div>
      <Header />
      <GoogleLogin
        clientId="385302117947-tgnn70ejkmsuqfpg2uov9bugj2m3jp6c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;
