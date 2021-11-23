import Todo from './Todo.js';

const TodoContainer = ({ todos }) => {
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo.todo} key={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
