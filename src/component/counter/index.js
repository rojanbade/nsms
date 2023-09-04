import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({
      [name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert(`${formData.email} ${formData.password}Login successfull`);
  };

  useEffect(() => {
    document.title = `you scored ${count} goals!!!!`;
  });

  return (
    <>
      <div>you scored {count} goals!!</div>
      <button onClick={() => setCount(count + 1)}>Shoot</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Counter;
