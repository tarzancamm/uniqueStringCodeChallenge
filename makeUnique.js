//Write a function to remove all duplicate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.


// const removeDbl = (string) => {
//     return string
//     .split('')
//     .filter(function(item, pos, self) {
//         return self.indexOf(item) === pos
//     })
//     .join('')
//}

function makeUnique(str) {
    let answer = ''

    for (let i = 0; i < str.length; i++) {
        if (!answer.includes(str[i])) {
            answer += str[i]
        }
    }
    return answer
}


console.log(makeUnique('helloworld'))
// helowrd

console.log(makeUnique('iwanttoclimbamountain'))
// iwantoclmbu