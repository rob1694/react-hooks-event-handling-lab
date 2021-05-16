import React from "react"

 /*
In that component, render a button with the text 'Eyes on me'.
On that button, add event handlers that listens for the focus and blur events.
*/

function Focus() {
    return console.log('Good!')
}

function Blur() {
    return console.log('Hey! Eyes on me!')
}

function EyesOnMe () {
    return (
        <button onFocus={Focus} onBlur={Blur}>
            Eyes on me.
        </button>
        
    )
}

export default EyesOnMe;