import React from "react";
import './todo.css';
import Todoadd from "./todoadd";

function Todobody()
{
    return(
        <div align="center"className="todobody">
            <h1 align="center">My Todo List</h1>
            <Todoadd/>
        </div>
    )

}
export default Todobody;