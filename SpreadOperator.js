//We can use Spread Operator for array as well as objects

const age = [50, 60, 25, 26, 35, 48, 52]

const technologies = ["React", "Angular", "PHP", "Node", "NextJs"]

const abc = [1, 2, 3, 4, 5]

//Spread Operator used below will combine all the arrays
const allData = [...age, ...technologies, ...abc]
// console.log("allData", allData);

const car = {
    brand: "Tata",
    model: "Nexon",
    color: "Red"
}

const carOwner = {
    fname: "Akash",
    lname: "Rajput"
}

const carInfo = {...car, ...carOwner}
console.log(carInfo);