import React from "react";
import { useState } from "react";
import "./App.css";
function App(){
  const[newItem, setNewItem]=useState("");
  const[items,setItems]=useState([]);

  const[showEdit,setShowEdit]=useState(-1);
  const[updatedText,setUpdatedText]=useState("");

  function addItem(){
    if(!newItem){
      alert("Enter a Task to do!!!!");
      return;
    }

    const item={
      id:Math.floor(Math.random()*1000),
      value:newItem,
    };

    setItems((oldList)=>[...oldList,item]);
    setNewItem("");
  }

  function deleteItem(id){
    const newArray=items.filter((item)=>item.id !== id);
    setItems(newArray);
  }
  function editItem(id,newText){
    const currentItem=items.filter((item)=>item.id===id);
    const newItem={
      id:currentItem.id,
      value:newText,
    };
    deleteItem(id);


    setItems((oldList)=>[...oldList,newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }
  return(
    <div className="app">
      <h1>My To-do List</h1>
      <input id="n1" type="text" 
      placeholder="Add a Task.." value={newItem}
      onChange={(e)=> setNewItem(e.target.value)}/>

      <button id="add" onClick={()=>addItem()}>Add</button>
      <h3>Click on task to update</h3>
      <ul>
      
        {items.map((item)=>{
          return(
            <div>
              <li id="l1" key={item.id} onClick={()=>setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  x
                </button>
              </li>
              {showEdit == item.id ? (
                <div>
                  <input id="n1"
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button id="up" onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;