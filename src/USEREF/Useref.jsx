import React, { useRef } from "react";

const Useref = () => {
  const id = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Enter your name" ref={id} />
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        ref={email}
      />
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        ref={password}
      />
      <button>Submit</button>
    </form>
  );
};

export default Useref;
