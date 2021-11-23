import Todo from './Todo.js';

const TodoContainer = ({ todos, handleTodoDone }) => {
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} doneHandler={handleTodoDone} />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
