import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';

import { setUser } from '../../redux/actions';

import Header from '../../components/Header';

const LoginPage = () => {
  const dispath = useDispatch();
  const responseGoogle = (response) => {
    dispath(setUser(response.profileObj));
  };

  return (
    <div>
      <Header />
      <GoogleLogin
        clientId="385302117947-tgnn70ejkmsuqfpg2uov9bugj2m3jp6c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginPage;
