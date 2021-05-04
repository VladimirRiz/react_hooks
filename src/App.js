import dotenv from 'dotenv';

import { useState } from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import Todo from './components/Todo';
import AuthContext from './auth-context';

const App = (props) => {
  const [page, setPage] = useState('auth');
  const [auth, setAuth] = useState(true);

  const login = () => {
    setAuth(true);
  };

  const pageHandler = (pageName) => {
    setPage(pageName);
  };
  return (
    <div className="App">
      <AuthContext.Provider value={{ value: auth, login: login }}>
        <Header
          todoList={pageHandler.bind(this, 'todos')}
          auth={pageHandler.bind(this, 'auth')}
        />
        <hr />
        {page === 'auth' ? <Auth /> : <Todo />}
      </AuthContext.Provider>
    </div>
  );
};

export default App;
