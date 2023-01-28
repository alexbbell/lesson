import React from 'react'

export const InputField = ( {text, setText, addTodo }) => {
  return (
    <label><input value={text} onChange={(e) => setText(e.target.value)} ></input>
        <button onClick={addTodo} >Add todo</button></label>
  )
}



