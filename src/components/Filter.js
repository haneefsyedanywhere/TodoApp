const Filter = () => {
  return (
    <section className="todo-filters">
      <button className="btn-primary selected">All todos</button>
      <button className="btn-primary">Active todos</button>
      <button className="btn-primary">Completed todos</button>
    </section>
  );
};

export default Filter;
