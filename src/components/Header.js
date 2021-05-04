import { useContext } from 'react';
import AuthContext from '../auth-context';

const Header = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <header>
      {authContext.value ? (
        <button onClick={props.todoList}>Todo List</button>
      ) : null}
      <button onClick={props.auth}>Auth</button>
    </header>
  );
};

export default Header;
