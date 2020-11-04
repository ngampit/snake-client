/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection; 

const setupInput = function(conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    stdin.on("data", handleUserInput)
    connection = conn; 
    return stdin;
   
}

const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit(); 
    }
    // w
    if (key === 'w') { 
        connection.write("Move: up")
    }
    //A
    if (key === 'a')  {
        connection.write("Move: left")
    }
 
    //S
    if (key === 's') {
        connection.write("Move: down")
    }

    //D 
    if (key === 'd') {
        connection.write("Move: right")

    }
}


module.exports = { setupInput };



