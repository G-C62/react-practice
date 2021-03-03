import { useState, useCallback } from 'react';

function Home() {
  const todoInit = ['to_do1', 'to_do2', 'to_do3'];
  const [todoList, setTodoList] = useState(todoInit);
  const [todo, setTodo] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setTodoList((todoList) => [...todoList, todo]);

      setTodo('');
    },
    [setTodoList, todo, setTodo],
  );

  const onChange = useCallback(
    (e) => {
      const { value } = e.target;
      setTodo(value);
    },
    [setTodo],
  );

  const onClick = useCallback((e) => {
    e.preventDefault();
    const index = e.target.dataset.index;
    let copyTodoList = [...todoList];
    copyTodoList.splice(index, 1);
    setTodoList(copyTodoList);
  }, [todoList, setTodoList]);

  return (
    <>
      <h1>Todo</h1>

      <form onSubmit={onSubmit}>
        <input
          autoComplete="todo"
          name="todo"
          placeholder="할일 내용"
          onChange={onChange}
          value={todo}
          autoFocus
        />

        <button type="submit">할일 추가</button>
      </form>

      <ul>
        {todoList.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <button data-index={index} onClick={onClick}>
              완료
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Home;
