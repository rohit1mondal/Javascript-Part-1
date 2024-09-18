// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    swift: 'swift by apple'
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
   // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'py', 'java', 'cpp', 'rb'] 

for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('RU', "Russia")
map.set('RU', "Russia")

for (const key in map) {
    console.log(key);
}
