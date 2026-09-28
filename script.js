let users = [
    { login: "Samir", pass: "1234", name: "Саламов Самир" },
    { login: "Umar", pass: "1234", name: "Ногойбаев Умар" },
    { login: "Abror", pass: "1234", name: "Ахмедов Аброр" },
    { login: "Bogdan", pass: "1234", name: "Полосин Богдан" },
    { login: "Sultan", pass: "1234", name: "Султан IT123" }
];

function login() {
    let uLogin = document.getElementById("loginIn").value.trim();
    let uPass = document.getElementById("passIn").value.trim();
    let msg = document.getElementById("msg");
    let foundUser = users.find(function(item) {
        return item.login === uLogin && item.pass === uPass;
    });
    if (foundUser) {
        msg.className = "success";
        msg.innerText = "👋 Добро пожаловать, " + foundUser.name + "!";
    } else {
        msg.className = "error";
        msg.innerText = "❌ Неверный логин или пароль!";
    }
}
function sumAll(...nums) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let n = Number(nums[i]);
        if (!isNaN(n)) {
            sum = sum + n;
        }
    }
    
    return sum;
}

function calcSum() {
    let inputVal = document.getElementById("numsIn").value;
    let arr = inputVal.split(",");
    let total = sumAll(...arr);
    document.getElementById("sumResult").innerText = total;
}

console.log("Проверка работы sumAll");
console.log("sumAll(2, 5, 6, 7) ->", sumAll(2, 5, 6, 7)); // 20
console.log("sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ->", sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55