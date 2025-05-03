import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState({
    name: '',
    age: '',
    email: '',
    phone: ''
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.age || !data.email || !data.phone) {
      alert('Please fill all the fields');
      return;
    }

    if (editIndex !== null) {
      // Update user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      // Add new user
      setUsers([...users, data]);
    }

    // Clear form
    setData({
      name: '',
      age: '',
      email: '',
      phone: ''
    });
  };

  const handleDelete = (deleteIndex) => {
    const del = users.filter((_, index) => index !== deleteIndex);
    setUsers(del);
    // Reset form if the deleted entry was being edited
    if (editIndex === deleteIndex) {
      setData({
        name: '',
        age: '',
        email: '',
        phone: ''
      });
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setData(users[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{editIndex !== null ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          value={data.name}
          name='name'
          onChange={handleData}
        />
        <br />
        <input
          type='number'
          placeholder='Enter your age'
          value={data.age}
          name='age'
          onChange={handleData}
        />
        <br />
        <input
          type='email'
          placeholder='Enter your email'
          value={data.email}
          name='email'
          onChange={handleData}
        />
        <br />
        <input
          type='text'
          placeholder='Enter your phone'
          value={data.phone}
          name='phone'
          onChange={handleData}
        />
        <br />
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      <div style={{ marginTop: '40px' }}>
        <h1>Users</h1>
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
