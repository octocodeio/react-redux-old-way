const user = {
  name: "Adam",
  email: "adam@gmail.com"
}

export default ({ counter, increment, decrement, addUser, users }) => (
  <>
    <h1>{counter}</h1>
    <button onClick={() => increment()}>Add</button>
    <button onClick={() => decrement()}>Subtract</button>
    <button onClick={() => addUser(user)}>Add User</button>
    <ul>
      { users.map(user => <li>{user.email}</li>)}
    </ul>
  </>
);
