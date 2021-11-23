import { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState('');
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todo, done: false };
    handleAddTodo(newTodo);
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
