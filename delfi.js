let numAdd = document.getElementById('numberAdd');
let localAdd = document.getElementById('localAdd');
let numSubtract = document.getElementById('numberSubtract');
let localSubtract = document.getElementById('localSubtract');

let number = 0;

console.log(`Normal: ${number}`);
console.log(`localStorage: ${localStorage.getItem('counter')}`);

numAdd.addEventListener('click',()=> number++)

numSubtract.addEventListener('click',()=> number--)

localAdd.addEventListener('click',()=>{
    if(localStorage.length == 0) localStorage.setItem('counter','0')
    else if (localStorage.length > 0)
    {
        let next = Number(localStorage.getItem('counter'))
        localStorage.setItem('counter',next+1)
    }
})

localSubtract.addEventListener('click',()=>{
    if(localStorage.length == 0) localStorage.setItem('counter','0')
    else if (localStorage.length > 0)
    {
        let next = Number(localStorage.getItem('counter'))
        localStorage.setItem('counter',next-1)
    }
})

document.addEventListener('click', ()=> {
    console.clear()
    console.log(`Normal: ${number}`);
    console.log(`localStorage: ${localStorage.getItem('counter')}`);
})
