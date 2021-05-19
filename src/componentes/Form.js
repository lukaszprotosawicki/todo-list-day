import React from "react";

const Form = () => {
  return (
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
  );
};

export default Form;
