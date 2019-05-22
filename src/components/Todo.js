import React from "react";
import './../assets/style/style.css';
export default props => ( 
    <div  style = {{display: "flex" , justifyContent: "center"}}>
    <div class= "task" style = {{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
        onClick = { props.toggleComplete} 
        > 
        {props.todo.text}
             </div>
             <button class="delete" onClick={props.onDelete}>x</button>
             </div> 
             );