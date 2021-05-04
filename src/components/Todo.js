import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import { useFormValidation } from '../hooks/form';
import axios from 'axios';
import List from './List';

const Todo = (props) => {
  //   const [isValid, setIsValid] = useState(false);
  //   const [todoName, setTodoName] = useState('');
  //   const [submitted, setSubmitted] = useState(null);
  //   const [todoList, setTodoList] = useState([]);
  //   const inputRef = useRef();
  const validation = useFormValidation();

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.item);
      case 'SET':
        return action.item;
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}.json`).then((res) => {
      const todoData = res.data;
      const todos = [];
      for (let key in todoData) {
        todos.push({
          id: key,
          name: todoData[key].name,
        });
      }
      dispatch({ type: 'SET', item: todos });
    });
  }, []);

  const addTodoList = () => {
    axios
      .post(`${process.env.REACT_APP_URL}.json`, { name: validation.value })
      .then((res) => {
        dispatch({
          type: 'ADD',
          item: { name: validation.value, id: res.data.name },
        });
      })
      .catch((err) => console.log(err));
  };

  const removeHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/${id}.json`)
      .then((res) => {
        dispatch({ type: 'REMOVE', id });
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <input
        placeholder="todo"
        onChange={validation.valueHandler}
        style={{ backgroundColor: validation.isValid ? 'transparent' : 'red' }}
      />
      <button disabled={!validation.isValid} onClick={addTodoList}>
        Add
      </button>
      {useMemo(
        () => (
          <List items={todoList} removeHandler={removeHandler} />
        ),
        [todoList]
      )}
    </React.Fragment>
  );
};

export default Todo;
