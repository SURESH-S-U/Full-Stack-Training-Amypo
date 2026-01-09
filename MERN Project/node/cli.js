//Read the inputs from the command line

const command=process.argv[2];
const name = process.argv[3];

//check the command entered by user
if(command === "greet"){
    if(name){
        console.log("Hello",name + "! Welcome to Node JS")
    }else{
        console.log("Please enter add your name in command");
    }
}else{
    // if wrong command other than greet given
    console.log("Invalid command");
}