function App() {
  return (
    <div className="App">
      <h1>What's the Plan for Today</h1>
      <form autoComplete="off">
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Create daily tasks.."
        />
        <button type="submit">Create</button>
      </form>

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            Learn to do
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          ALL
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}

export default App;
