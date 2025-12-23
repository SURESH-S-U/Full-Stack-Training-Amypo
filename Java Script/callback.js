function greet(name , callback)
{
    console.log("Welcode " , name);
    callback("suresh",check1);
}

function  Thanks(name , callcheck)
{
    console.log("Thanks ",name);
    callcheck("Sura")
}

function check1(name)
{
    console.log(`Checking ${name}'s id and Verifying.`);
}


greet("suresh" , Thanks);