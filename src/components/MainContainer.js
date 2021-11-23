import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoContainer from './TodoContainer.js';
import Filter from './Filter';
import useFetch from '../customHooks/useFetch.js';
const MainContainer = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch('http://localhost:8080/todos');

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <Header />
      <AddTodo />
      {todos && <TodoContainer todos={todos} />}
      <Filter />
    </>
  );
};

export default MainContainer;
