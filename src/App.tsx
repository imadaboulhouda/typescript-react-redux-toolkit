import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/slices/TodoSlice";
import { AppDispatch, RootState } from "./store";
import { getUsers } from "./store/slices/UsersSlice";
import { TodoType, User } from "./interfaces";

function App() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  const users = useSelector((state: RootState) => state.users.data);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h1>Name of todos</h1>
      <button
        onClick={() => {
          dispatch(addTodo("imad"));
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo: TodoType, index: number) => {
          return <li key={index}>{todo.name}</li>;
        })}
      </ul>

      <button onClick={() => dispatch(getUsers())}>Get Users</button>
      {users.map((user: User, index) => (
        <p key={index}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
