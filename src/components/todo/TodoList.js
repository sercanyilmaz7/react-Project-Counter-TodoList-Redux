import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodo, clearCompTodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  console.log(todoList)

  const handleClearList = () => {
    dispatch(clearTodo());
  };
  const handleClearComplited = () => {
    dispatch(clearCompTodo());
  };
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList);
  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
        <button onClick={handleClearComplited} className="clear-button">
          Clear Complited
        </button>
      </div>
    </div>
  );
};

export default TodoList;
