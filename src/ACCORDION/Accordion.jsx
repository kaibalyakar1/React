import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleButton = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const items = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, developed by Facebook.",
    },
    {
      title: "Why use React?",
      content:
        "React allows developers to build fast and scalable applications using reusable components.",
    },
    {
      title: "How does React work?",
      content:
        "React creates a virtual DOM and efficiently updates only the necessary parts when the state changes.",
    },
    {
      title: "What are React hooks?",
      content:
        "Hooks let you use state and lifecycle features in function components without writing a class.",
    },
    {
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript that looks like HTML but is used in React to describe UI structures.",
    },
    {
      title: "What is the Virtual DOM?",
      content:
        "The Virtual DOM is a lightweight JavaScript representation of the real DOM, which React uses to optimize updates and rendering.",
    },
    {
      title: "What is component-based architecture?",
      content:
        "React's component-based architecture allows you to break down the UI into independent, reusable pieces.",
    },
    {
      title: "What is React Router?",
      content:
        "React Router is a library that enables navigation between different pages or views in a React application.",
    },
    {
      title: "How to manage state in React?",
      content:
        "State can be managed using React’s useState, useReducer hooks, or global state management libraries like Redux or Context API.",
    },
    {
      title: "What are props in React?",
      content:
        "Props (short for properties) allow you to pass data from a parent component to a child component in React.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleButton(index)}
            className="w-full flex justify-between items-center p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {" "}
            {item.title}
            <span>{openIndex === index ? "🔽" : "▶️"}</span>{" "}
          </button>

          {openIndex === index && (
            <p className="p-3 bg-gray-100">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
