// function add(x,y){
//     console.log(x+y);
// }

//When writing single line statement we don't have to give curly brackets
/*const add = (x,y) => console.log(x+y)*/

//When writing multiline statement we have to give curly brackets
/*const add = (x,y) => {
    console.log(x+y)
    console.log(x-y)
}*/

//When passing single parameter it's not necessary to give paranthesis
/*const showName = name = {
    console.log(name)
}*/

//When writing a single line statement and returning something we don't use return keyword, it's present there by default
/*const add = (x,y) => x+y*/

const add = (x,y) => {
    console.log(x+y);
}

add(50, 5)

sub(45, 40)

function sub(x,y){
    console.log(x-y);
}