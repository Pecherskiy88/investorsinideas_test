import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { setUser } from '../../redux/actions';

import Header from '../../components/Header';

const LoginPage = () => {
  const dispath = useDispatch();
  const history = useHistory();
  const responseGoogle = (response) => {
    dispath(setUser(response.profileObj));
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    localStorage.setItem(
      'googleId',
      JSON.stringify(response.profileObj.googleId),
    );
    history.push('/profile');
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <GoogleLogin
          clientId="385302117947-tgnn70ejkmsuqfpg2uov9bugj2m3jp6c.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </Wrapper>
    </div>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
