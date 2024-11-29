import React from "react";

const AddTaskForm = ({ setToDoList, toDoList }) => {
  const refToDo = React.useRef(null);
  const [inputValue, setInputValue] = React.useState("");
  const handleAddToDo = () => {
    setToDoList([
      ...toDoList,
      {
        ToDo: refToDo.current.value,
      },
    ]);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(refToDo);
  return (
    <>
      <div className="add-task-form flex justify-center">
        <form action="">
          <label htmlFor="" className="text-sm ">
            Add To-Do
          </label>
          <input
            type="text"
            className="p-2 rounded-md border border-[#ded9f6] text-black w-full focus:border-red-600"
            ref={refToDo}
            inputValue={inputValue}
            onChange={handleChange}
          />

          <button
            className="px-2 py-2 rounded-md bg-[#924dbf] text-gray-800 w-full font-semibold text-lg mt-5"
            onClick={handleAddToDo}
            type="reset"
            disabled={!inputValue}
          >
            Add To-Do
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTaskForm;
