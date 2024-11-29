import React from 'react'

const ToDoList = ({ toDoList }) => {
    const [taskComplete,setTaskComplete] = React.useState(false);


  return (
    <>
      <div className="ToDo-list custom-scroll mt-5 overflow-y-auto max-h-[250px]">
        <ul className="">
          <li>
          </li>
          {toDoList.length !== 0 ? (
            toDoList.map((item, key) => (
              <li
                className="flex justify-between p-2 border-b-2 border-[#9e72c3] text-lg items-center"
                key={key}
              >
                {item.ToDo}
              </li>
            ))
          ) : (
            <h3 className="text-center">There's Nothing to do! Relax :D</h3>
          )}
        </ul>
      </div>
    </>
  );
};

export default ToDoList