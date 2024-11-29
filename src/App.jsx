import React from 'react'
import AddTaskForm from './AddTaskForm';
import ToDoList from './ToDoList';

const App = () => {
  const [toDoList, setToDoList] = React.useState([]);
  console.log(toDoList);
  return (
    <>
      <section className="min-h-screen bg-[#10061f] flex justify-center items-center text-white">
        <div className="max-w-[500px] bg-[#2e0f48] rounded-md p-4 border-[1px] border-[#96529b]">
          <h5 className="text-center text-2xl font-semibold mb-3">
            To-Do List
          </h5>
          <AddTaskForm toDoList={toDoList} setToDoList={setToDoList} />
          <ToDoList toDoList={toDoList} />
        </div>
      </section>
    </>
  );
}

export default App