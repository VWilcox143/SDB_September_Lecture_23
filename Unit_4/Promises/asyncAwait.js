/*
!Async/Await
    - Introduces in ES8 in 2017
    - Can make any function an async function by denoting as such.
*   Keywords
        -async
            -denotes a function
        -await
            -calls a process to "wait" for a result
    -This can help us reduce the need for Callback functions
    -Cannot be used in a loop
    -Always returns a promise
*/

// Some syntax
async function asyncFuncDeclaration() {
    // code block...
}

let FuncExpression = async function() {
    // code block...
}

let arrowFunc = async() => {
    // code block...
}

async function getName() {
    return "Gandalf";
}

getName().then(data => console.log(data));

//! Await - Tell JS that a promise is being returned and to wait on that result.

async function extraData() {
    let info = await returnData();
    return(`${info} in some cloud...`);
}

extraData().then(data => console.log(data));