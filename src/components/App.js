import React, { useEffect, useState } from "react";

const App = () => {
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const userData = [
    {
      id: 1,
      name: "ABC",
      email: "abc@gmail.com",
      password: "12",
    },
    {
      id: 2,
      name: "DEF",
      email: "def@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "GHI",
      email: "ghi@gmail.com",
      password: "123456",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    for (let t of userData) {
      if (email == t.email) {
        if (password != t.password) {
          let int1 = setTimeout(() => {
            setPasswordError(!passwordError);
          }, 3000);
          break;
        } else {
          let int1 = setTimeout(() => {
            console.log(userData);
            setUserError(!userError);
            setPasswordError(false);
          }, 3000);
          break;
        }
      } else {
        let int1 = setTimeout(() => {
          setUserError(!userError);
        }, 3000);
        break;
      }
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="input-email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          id="input-password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="submit-form-btn">Submit</button>
      </form>
      <p id="user-error">{userError && "User not found"}</p>
      <p id="password-error">{passwordError && "Password Incorrect"}</p>
    </div>
  );
};

export default App;
