const a = parseInt(prompt("numberOneTriangle"));
for (let i = 1; i <= a; i++){
    let string = "";
    for (let j = 1; j <= i; j++){
        string += "*";
    }
    console.log(string);
}