// Promise

const callData = callback => {
    setTimeout(()=>{
        const data = `ferdi`;
        callback(data)
    },3000)
}

callData(name => console.log(`nama saya adalah ${name}`))