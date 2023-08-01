import { Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";

const LoginPage = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div>
        <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      {/* <h1>Log In</h1> */}
      {isSubmitted ? <HomePage/> : renderForm}
      {/* <input placeholder="Your email address" />
      <input type="password" placeholder="Your password" />
      <Link to="/home">
        <button>Log In</button>
      </Link> */}
    </>
  );
};

export default LoginPage;
