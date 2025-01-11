let btn = document.querySelector('.button');
let display = document.querySelector('.display input');
function generate (){
    const length = 6;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "qwertyuioplkjhgfdsazxcvbnm";
    const num = "1234567890";
    const symbol = "!@#$%&*+"

    let password = " ";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += num[Math.floor(Math.random()*num.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    if(password.length<6){
        password += uppercase[Math.floor(Math.random()*uppercase.length)];
        password += lowercase[Math.floor(Math.random()*lowercase.length)];
        password += num[Math.floor(Math.random()*num.length)];
        password += symbol[Math.floor(Math.random()*symbol.length)];
    }
    display.value = password;
    
    
}
btn.addEventListener('click',generate);