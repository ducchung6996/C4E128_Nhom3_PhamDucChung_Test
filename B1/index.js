const a = parseInt(prompt("Nhập vào số thứ nhất"));
const b = parseInt(prompt("Nhập vào số thứ hai"));

function showNum(numb1, numb2) {
    let numbers = "";
    for (let i = numb1; i <= numb2; i++) {
        if (i == 2 || i == 3) {
            numbers += i + ", ";
        }
        if (i > 3) {
            for (j = 2; j < i; a++) {
                if (i % j != 0) {
                    numbers += i + ", ";
                    break;
                } else {
                    break;
                }
            }
        }
    }
    alert("Số nguyên tố trong khoảng hai số là: " + numbers);
}

if (a < b) {
    showNum(a, b);
} else {
    showNum(b, a);
}
