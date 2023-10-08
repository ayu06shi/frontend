import React from 'react'

const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input66');


    inputElement.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

        const command = inputElement.value;
        inputElement.value = '';

        executeCommand(command);
    }
});

function executeCommand(command) {
    // logic
    // the command is echoed back as output.
    const output = "> " + command + "\n";
    outputElement.textContent += output;
}


const command = () => {
    return (
      <div>
        <div id="command-window">
          <pre id="output"></pre>
          <input type="text" id="input66" autofocus />
          
                </div>
               </div>
            );
} 
export default command
  