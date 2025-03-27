import React, { useEffect, useState } from "react";

const Form = ({ data, setData, updateForm, setUpdateForm }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
    id: data.length + 1,
  });

  // Fill form when updateForm is selected
  useEffect(() => {
    if (updateForm) {
      setAddData(updateForm);
    }
  }, [updateForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateForm) {
      // Update existing post
      setData((prev) =>
        prev.map((item) => (item.id === updateForm.id ? addData : item))
      );
      setUpdateForm({});
      setAddData({ title: "", body: "" });
    } else {
      // Generate a new id
      const newId = data.length
        ? Math.max(...data.map((item) => item.id)) + 1
        : 1;
      setData((prev) => [...prev, { ...addData, id: newId }]);

      // Reset form
      setAddData({ title: "", body: "", id: newId + 1 });
    }
  };
  return (
    <form className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Add title"
          name="title"
          value={addData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Add Post"
          name="body"
          value={addData.body}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {updateForm?.id ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
