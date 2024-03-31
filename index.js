const fs = require('fs')

let res = fs.readFileSync('./data.txt', {encoding: 'UTF-8'})
res = res.split('------------')

const dataObj = {
    name: '',
    data: []
}

// console.log(res[1].split('\r\n').filter(item => item !== ''))
for (let i = 0; i < res.length; i++) {
    let lines = res[i].trim().split('\r\n').filter(item => item !== '');
    if (i === 0) {
        dataObj.name = lines[0].slice(0, 6);
        continue;
    }
    for (let i = 0; i < lines.length; i++) {
        if (lines[0].slice(0, 3) === '---') {
            let roll = lines[i].split('---')[0].trim()
            dataObj.data.push({
                isRoll: true,
                title: roll
            })
            continue
        }
        if (lines[i].slice(0, 1) === '第') {
            dataObj.data.push({
                title: lines[i].trim()
            })
        }
    }


    // console.log(res[i])
    // console.log(dataObj)
}

console.log(dataObj)

