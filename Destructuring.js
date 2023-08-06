
//Array Destructuring
const car = ["Nexon", "Polo", "Swift", "Rapid", "Hector", "Fortuner"]

// const Tata = car[0]
// const Volkswagen = car[1]
// const Suzuki = car[2]
// const Skoda = car[3]
// const MG = car[4]
// const Toyota = car[5]

const [Tata, Volkswagen, Suzuki, Skoda, MG, Toyota] = car

console.log(Tata, Volkswagen, Suzuki, Skoda, MG, Toyota);


//Object Destructuring
const companyDetails = {
    cname: 'Wipro',
    no_of_employees: 250,
    branch: "Pune",
    daily_turnover: "50Lakhs",
    eshtablishment_year: 1996
}

const {cname, no_of_employees, branch, daily_turnover, eshtablishment_year} = companyDetails

console.log(cname);
console.log(no_of_employees);
console.log(branch);
console.log(daily_turnover);
console.log(eshtablishment_year);