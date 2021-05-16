import React from "react"

/*
In that component, render an input with the right type.
On that input, add an event handler that listens for the change event.
When that event fires, use console.log to print out the text 'Entering password...'.
*/
function handleChange() {
    console.log("Entering password...")
  }

function Keypad() {
   return (
      <input type="password" onChange={handleChange} />
    )
  }

export default Keypad
