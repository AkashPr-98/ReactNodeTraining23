
const age = [50, 60, 25, 26, 35, 48, 52]

const technologies = ["React", "Angular", "PHP", "Node", "NextJs"]

const abc = [1, 2, 3, 4, 5]

age.filter(abc => abc < 50).map(b => {
    console.log(b);
})

age.slice(1,4).map(a => {
    console.log(a);
})

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