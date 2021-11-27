const Filter = ({ handleSelectedFilter }) => {
  const handleBtnClick = (e) => {
    let filterSelected = e.target.getAttribute('data-filter-type');
    const filterBtns = [...document.querySelectorAll('.todo-filters button')];
    filterBtns.forEach((filterBtn) => {
      filterBtn.classList.remove('selected');
    });
    e.target.classList.add('selected');
    handleSelectedFilter(filterSelected);
  };
  return (
    <section className="todo-filters">
      <button
        className="btn-primary selected"
        data-filter-type="all"
        onClick={handleBtnClick}
      >
        All todos
      </button>
      <button
        className="btn-primary"
        data-filter-type="active"
        onClick={handleBtnClick}
      >
        Active todos
      </button>
      <button
        className="btn-primary"
        data-filter-type="completed"
        onClick={handleBtnClick}
      >
        Completed todos
      </button>
    </section>
  );
};

export default Filter;
