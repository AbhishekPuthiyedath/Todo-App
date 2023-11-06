import React,{useEffect, useState} from "react";
import Todolist from "./todolist";
function Todoadd()
{
    let [todo,setTodo]=useState([]);
    let [todotitle,setTodotitle]=useState("");
    let [tododescr,setTododescr]=useState("");
    let [compleatedTodos,setcompleatedTodos]=useState([]);
    let [isComleateScreen,setIsCompleateScreen]=useState(false)
    const handletodo=()=>{
        let todoitem={
            title:todotitle,
            description:tododescr
        }
        let updatedTodoArr=[...todo];
        updatedTodoArr.push(todoitem);
        setTodo(updatedTodoArr);
        localStorage.setItem('todo',JSON.stringify(updatedTodoArr))
    }
    const handleDelete=(index)=>{
        let reducedTodo=[...todo]
        reducedTodo.splice(index,1)
        localStorage.setItem('todo',JSON.stringify(reducedTodo))
        setTodo(reducedTodo)
    }
    const handeleCompleated=(index)=>{
        let now=new Date();
        let dd=now.getDate();
        let mm=now.getMonth()+1;
        let yyyy=now.getFullYear();
        let h=now.getHours();
        let m=now.getMinutes();
        let s=now.getSeconds();
        let compleatedOn=dd+'-'+mm+'-'+yyyy+'at'+h+':'+m+':'+s;
        let filteredItem={
            ...todo[index],
            compleatedOn:compleatedOn
           
        }
        let updatedCompleatedArr=[...compleatedTodos]
        updatedCompleatedArr.push(filteredItem)
        setcompleatedTodos( updatedCompleatedArr)
        handleDelete(index);
        localStorage.setItem('compleatedTodos',JSON.stringify(updatedCompleatedArr))
    }
    const handleDeleteCompleatedTodo=(index)=>{
        let reducedTodo=[...compleatedTodos]
        reducedTodo.splice(index,1)
        localStorage.setItem('compleatedTodos',JSON.stringify(reducedTodo))
        setcompleatedTodos(reducedTodo)
    }
    useEffect(()=>{
        let savedtodo=JSON.parse(localStorage.getItem('todo'))
        let savedCompleatedtodo=JSON.parse(localStorage.getItem('compleatedTodos'))
        if(savedtodo){
            setTodo(savedtodo);
        }
        if(savedCompleatedtodo){
            setcompleatedTodos(savedCompleatedtodo);
        }
    },[])
    return(
        <div className="">
     <div className="inputbox">
     <form>
            <input type="text" placeholder="Add Activity" className='todo-inputs' onChange={(e)=>setTodotitle(e.target.value)}></input>
            <input type="text" placeholder="Add description" className='todo-inputs'  onChange={(e)=>setTododescr(e.target.value)}></input>
  <button onClick={handletodo}>Add</button>
  </form>
  </div>
  <div>
  <button className={`secondaryBtn $={isComleateScreen  ===false && 'active'} complete-btn`} onClick={()=>setIsCompleateScreen(false)}>Todo Task</button>
  <button className={`secondaryBtn $={isComleateScreen  ===true && 'active'} compleated-btn`} onClick={()=>setIsCompleateScreen(true)}>Compleated</button>
  </div>
            <Todolist todoArray={todo} handleDelete={handleDelete} isCompleated={isComleateScreen} compleatedTodo={compleatedTodos} Compleated={handeleCompleated} handleDeleteCompleated={handleDeleteCompleatedTodo}/>
        </div>
    )
}
export default Todoadd;