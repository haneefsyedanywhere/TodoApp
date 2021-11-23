import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoContainer from './TodoContainer.js';
import Filter from './Filter';
import { useState, useEffect } from 'react';

const MainContainer = () => {
  const [todos, setTodos] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (url) => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setTodos(data);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted!');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  };

  useEffect(() => {
    fetchData('http://localhost:8080/todos');
  }, []);

  const handleAddTodo = (newTodo) => {
    fetch('http://localhost:8080/todos', {
      method: 'Post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTodo),
    }).then(() => {
      fetchData('http://localhost:8080/todos');
    });
  };

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <Header />
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos && <TodoContainer todos={todos} />}
      <Filter />
    </>
  );
};

export default MainContainer;
