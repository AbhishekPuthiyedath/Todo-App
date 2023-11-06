import React from "react";
import './todo.css';
function Todolist(props) {
  return (
    <div>
      {props.isCompleated===false&&props.todoArray.map((item, index) => (
        <div className="todo">
        <div className="todohold">
        <div className="bullet"></div>
        <li type="none" className="todo-item">{item.title}</li>
        <li type="none" className="todo-item-desc">({item.description})</li>
        </div>
        <div>
        <button className="complete-btn" fdprocessedid="hp1lkq" onClick={()=>props.Compleated(index)}>Done</button>
        <button className="trash-btn" fdprocessedid="jwzoxb" onClick={()=>props.handleDelete(index)}>Delete</button>
        </div>
    </div>
      ))}
      {props.isCompleated===true&&props.compleatedTodo.map((item, index) => (
        <div className="todo">
        <div className="todohold">
        <div className="bullet"></div>
        <li type="none" className="todo-item">{item.title}</li> 
        <li type="none" className="todo-item-desc">({item.description})</li>
        <h6 className="todo-item-compleate">Compleated on:{item.compleatedOn}</h6>
        </div>
        <button className="trash-btn" fdprocessedid="jwzoxb" onClick={()=>props.handleDeleteCompleated(index)}>Delete</button>
    </div>
      ))}
    </div>
  );
}

export default Todolist;
