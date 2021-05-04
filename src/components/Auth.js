import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <h1>Auth Header</h1>
      <button onClick={authContext.login}>login</button>
    </div>
  );
};

export default Auth;
