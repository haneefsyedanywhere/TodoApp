import Todo from './Todo.js';

const TodoContainer = ({ todos, handleTodoDone, handleDeleteTodo }) => {
  return (
    <section className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            doneHandler={handleTodoDone}
            deleteHandler={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
