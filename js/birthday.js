var month = Math.floor(Math.random() * 12) + 1;
var day = Math.floor(Math.random() * 31) + 1;
var guessnum = 0;
var guessdaynum = 0;

function guess() {
    var result = "";
    var num = parseInt(document.getElementById("user").value);

    if (guessnum == 5) {
        alert("실패입니다 ㅜㅜㅜㅜ\n다음번에 다시 도전하세요!!");

    }

    if (num == month) {
        result = "정답입니다!!!";
    }
    else if (num < month) {
        result = "up !!!!";
        guessnum++;
    }
    else {
        result = "down !!!!";
        guessnum++;
    }

    document.getElementById("hint").value = result;
    document.getElementById("guessnum").value = guessnum;
    return true;


}
function guessday() {
    var result = "";
    var num = parseInt(document.getElementById("userday").value);
    guessdaynum++;

    if (guessdaynum == 10) {
        alert("실패입니다 ㅜㅜㅜㅜ\n다음번에 다시 도전하세요!!");

    }

    if (num == day) {
        result = "정답입니다!!!";
    }
    else if (num < day) {
        result = "up !!!!";
    }
    else {
        result = "down !!!!";
    }

    document.getElementById("hintday").value = result;
    document.getElementById("guessdaynum").value = guessdaynum;
    return true;


}