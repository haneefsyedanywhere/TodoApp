import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoContainer from './TodoContainer.js';
import Filter from './Filter';

const MainContainer = () => {
  return (
    <>
      <Header />
      <AddTodo />
      <TodoContainer />
      <Filter />
    </>
  );
};

export default MainContainer;
