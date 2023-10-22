import {useState} from "react"

export function InputForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function doSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
    
        setNewItem("")
      }


      return (
        <form onSubmit={doSubmit} className = "new-item-form">
            <div className = "form-row">
             <label hrmlFor = "item">New Item:</label>
                <input 
                 value = {newItem} 
                 onChange = {e => setNewItem(e.target.value)} //Set new value for useState, which is blank by default
                 type = "text" 
                  id = "item" 
                 />
            </div>
            <button className = "btn">Add Item</button>
     </form>
      )

    
}