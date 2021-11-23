import { useState } from 'react';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todo };

    fetch('http://localhost:8080/todos', {
      method: 'Post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTodo),
    }).then(() => {
      console.log('added todo');
    });
  };
  return (
    <section className="add-todo">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Add a todo..."
          value={todo}
          onChange={handleOnChange}
        />
        <button type="submit"> + </button>
      </form>
    </section>
  );
};

export default AddTodo;
