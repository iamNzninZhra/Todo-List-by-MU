/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Btn from "./ButtonComponent";
import { css } from '@emotion/css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const TodoForm = () => {
    const [todos, setTodos] = useState([
        { Title: "Task 1", Importance: "Importance 1", completed: false },
        { Title: "Task 2", Importance: "Importance 2", completed: false },
        { Title: "Task 3", Importance: "Importance 3", completed: false },
        { Title: "Task 4", Importance: "Importance 4", completed: false },
        { Title: "Task 5", Importance: "Importance 5", completed: false },
    ]);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // delete button
    const [deletedTodos, setDeletedTodos] = useState([]);

    // complete and not complete buttons
    const handleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // delete button
    const handleDelete = (index) => {
        const deletedTodo = todos.splice(index, 1);
        setDeletedTodos([...deletedTodos, deletedTodo[0]]);
    };

    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>

            <div className={css`
                display: flex;
                justify-Content: center;
                align-Items: center;
                flex-Direction: column;
                width: 80%;
                height: 100%;
                margin: 10px auto;
      
            `}>
                <h3 className={css`
                border-bottom: 1px solid black;
                `}>
                    My Todo List
                </h3>

                <TextField id="standard-basic" label="Add Your Task" variant="standard"
                    sx={{
                        position: "absolute",
                        top: "14px",
                        left: "160px",
                        height: "30px",
                        width: "150px",
                    }} onChange={handleChange}

                />
                <TextField
                    id="filled-number"
                    label="Importance"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    sx={{
                        position: "absolute",
                        top: "70px",
                        left: "160px",
                        height: "20px",
                        width: "150px",
                        backgroundColor: "white",
                    }}
                />

                <span className={css`
                    position: absolute;
                    top: 150px;
                    left: 160px;
                    border-bottom:1px solid #000;
                    `}>
                    {inputValue}
                </span>

                <Button variant="outlined"
                    sx={{
                        position: "absolute",
                        top: "30px",
                        left: "320px",
                    }} onClick={handleOpen}
                >Add To List</Button>
            </div>
            
        {
            todos.map((element, index) => (
                <div
                    key={element.Title}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid black",
                        margin: "40px auto 0 auto",
                        width: "50%",
                        height: "80px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                    }}
                >

                    <div
                        style={{
                            textDecoration: element.completed ? "line-through" : "none",
                        }}
                    >
                        {element.Title} - {element.Importance}
                    </div>

                    <Btn
                        backgroundColor="green"
                        buttonlable="Completed"
                        borderColor="green"
                        onClick={() => handleCompleted(index)}
                        completed={element.completed}
                    />
                    <Btn
                        backgroundColor="red"
                        buttonlable="Not Completed"
                        borderColor="red"
                        onClick={() => handleCompleted(index)}
                        completed={!element.completed}
                    />
                    <Btn borderColor="#F5E8DD" backgroundColor="#F6F5F5" buttonlable="Delete" onClick={() => handleDelete(index)} />
                    {/* <svg data-testid="DeleteIcon" className={css`
                    color:black;width: 50px;
                    height: 50px;`}>
                    </svg> */}
                    <div style={{ marginLeft: "20px" }}>
                        Date: / /
                    </div>
                </div>
            ))
            
        }
        
       
        </>
    );
};

export default TodoForm;
