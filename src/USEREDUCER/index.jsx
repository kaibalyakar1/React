import React, { useReducer } from "react";
import Button from "../USECALLBACK/Button";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null, error: null };

    case "UPDATE_USER":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
const UseReducer = () => {
  //intialize the usereducer for a authentication

  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async () => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const user = { name: "kaibalya", email: "kaibalya@gmai.com" };
      setTimeout(() => {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      }, 1000);
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: "Login failed" });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const updateUser = () => {
    dispatch({ type: "UPDATE_USER", payload: { name: "kaibalya anchanye" } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md text-center space-y-4">
        {state.loading && (
          <p className="text-blue-500 font-semibold">Loading...</p>
        )}

        {!state.isAuthenticated ? (
          <button
            onClick={login}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        ) : (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-700">
              Welcome, {state.user.name}
            </h2>
            <p className="text-gray-600">Email: {state.user.email}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
              <button
                onClick={updateUser}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Update User
              </button>
            </div>
          </div>
        )}

        {state.error && (
          <p className="text-sm text-red-600 font-medium">{state.error}</p>
        )}
      </div>
    </div>
  );
};

export default UseReducer;
