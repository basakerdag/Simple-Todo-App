import React from "react";
import {FcFullTrash} from "react-icons/fc";


const style={
  li: "flex justify-between bg-pink-100 p-4 my-2 lowercase",
  liComplete: "flex justify-between bg-pink-300 p-4 my-2 lowercase",
  todolistdiv:"flex",
  text:"ml-3 cursor-grabbing",
  textComplete:"ml-3 cursor-grabbing line-through",
  button:"cursor-grabbing flex items-center" ,

}

const todolist = ({todoitem,gecis,silmekicin}) => {
  return (
    <li className={todoitem.completed ? style.liComplete : style.li } >
      <div  className={style.todolistdiv} >
        <input onChange={()=>gecis(todoitem)}  type="checkbox"  checked={todoitem.completed ? 'checked' : ''} />
        <p onClick={()=> gecis(todoitem)}   className={todoitem.completed ? style.textComplete : style.text} > {todoitem.text} </p>
      </div>
      <button onClick={() => silmekicin(todoitem.id)}  > <FcFullTrash  size={30} /> </button>

    </li>
  )
}

export default todolist