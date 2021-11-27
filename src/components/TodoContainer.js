import Todo from './Todo.js';

const TodoContainer = ({
  todos,
  selectedFilter,
  handleTodoDone,
  handleDeleteTodo,
}) => {
  let todosToRender;
  if (selectedFilter == 'all') {
    todosToRender = todos;
  } else if (selectedFilter === 'active') {
    todosToRender = todos.filter((todo) => todo.done === false);
  } else if (selectedFilter === 'completed') {
    todosToRender = todos.filter((todo) => todo.done === true);
  }

  return (
    <section className="todo-list">
      <ul>
        {todosToRender.map((todo) => (
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
