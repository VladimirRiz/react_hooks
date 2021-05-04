import { useRef } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = (props) => {
  console.log('Rendering....');
  return (
    <TransitionGroup component="ul">
      {props.items.map((todo) => (
        <CSSTransition key={todo.id} timeout={500} classNames="item">
          <li onClick={props.removeHandler.bind(this, todo.id)}>{todo.name}</li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
