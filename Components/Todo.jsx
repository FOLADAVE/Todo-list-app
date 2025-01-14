import React from 'react'

const Todo = ({ id, title, description, mongoId, complete, deleteTodo, completeTodo }) => {
    return (
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {id + 1}
        </th>
        <td className={`px-4 py-2 sm:px-6 sm:py-4 ${complete ? "line-through" : ""}`}>{title}</td>
        <td className={`px-4 py-2 sm:px-6 sm:py-4 ${complete ? "line-through" : ""}`}>{description}</td>
        <td className="px-4 py-2 sm:px-6 sm:py-4">{complete ? "Completed" : "Pending"}</td>
        <td className="px-4 py-2 sm:px-6 sm:py-4 flex flex-col sm:flex-row gap-1">
          <button onClick={() => deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white text-sm sm:text-base'>
            Delete
          </button>
          {complete ? "" : (
            <button onClick={() => completeTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white text-sm sm:text-base'>
              Done
            </button>
          )}
        </td>
      </tr>
    );
  }
  

export default Todo