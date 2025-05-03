import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/userSlice'; // Use correct import

function Home() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault(); // Prevent form reload
    dispatch(setUsers(input)); // Correct dispatch
    setInput({ name: "", age: "", email: "", contact: "" }); // Optional: clear form after submit
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <label>Name</label>
        <br />
        <input type="text" name="name" value={input.name} onChange={handleChange} />
        <br />
        <label>Age</label>
        <br />
        <input type="number" name="age" value={input.age} onChange={handleChange} />
        <br />
        <label>Email</label>
        <br />
        <input type="email" name="email" value={input.email} onChange={handleChange} />
        <br />
        <label>Contact</label>
        <br />
        <input type="number" name="contact" value={input.contact} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
}

export default Home;
