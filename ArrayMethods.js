
const age = [50, 60, 25, 26, 35, 48, 52]

const technologies = ["React", "Angular", "PHP", "Node", "NextJs"]

const abc = [1, 2, 3, 4, 5]

/*Filter function is used to get an array of filtered data 
  i.e an array consisting of elements which satisfies the given condition
*/
age.filter(abc => abc < 50).map(b => {
    console.log(b);
})


//Slice Method is used to get an portion of array 
age.slice(1,4).map(a => {
    console.log(a);
})


//Sort method is used to sort the array in ascending order or descending order
console.log(technologies.sort((c,d) => c - d))



for(let i =0; i<age.length; i++){
    if(age[i] < 50){
        console.log(age[i]);
    }
}

for(let i =0; i<age.length; i++){
    console.log(age[i]);
}

age.map((c, b) => {
    console.log(`${c}:${b}`);
})

technologies.map((tech, position) => {
    console.log(`${tech}:${position}`);
})

const details = [
    {
        company: "TCS",
        city: "Pune"
    },
    {
        company: "Infosys",
        city: "Banglore"
    },
    {
        company: "Microsoft",
        city: "Delhi"
    },
    {
        company: "Google",
        city: "Hyderabad"
    },
]

// console.log(details[0].company);


/* 
    details variable is not an object but it is an array of objects.
    So in order to print all company values first we need to use the map
    function to itearte the array and then we can access the company 
    value by using the corresponding key like in the example below 
*/
details.map(a => {
    console.log(`${a.company}-${a.city}`);
})