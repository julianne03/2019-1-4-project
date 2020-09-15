function changeImage() {
    x = parseInt(Math.random() * 18 + 1);

    switch (x) {
        case 1: Imgsrc = "image/1.jpg"; num = 1; break;
        case 2: Imgsrc = "image/2.jpg"; num = 2; break;
        case 3: Imgsrc = "image/4.jpg"; num = 3; break;
        case 4: Imgsrc = "image/5.jpg"; num = 4; break;
        case 5: Imgsrc = "image/6.jpg"; num = 5; break;
        case 6: Imgsrc = "image/7.jpg"; num = 6; break;
        case 7: Imgsrc = "image/8.jpg"; num = 7; break;
        case 8: Imgsrc = "image/9.jpg"; num = 8; break;
        case 9: Imgsrc = "image/10.jpg"; num = 9; break;
        case 10: Imgsrc = "image/11.jpg"; num = 10; break;
        case 11: Imgsrc = "image/13.jpg"; num = 11; break;
        case 12: Imgsrc = "image/14.jpg"; num = 12; break;
        case 13: Imgsrc = "image/15.jpg"; num = 13; break;
        case 14: Imgsrc = "image/16.jpg"; num = 14; break;
        case 15: Imgsrc = "image/17.jpg"; num = 15; break;
        case 16: Imgsrc = "image/18.jpg"; num = 16; break;
        case 17: Imgsrc = "image/19.png"; num = 17; break;
        case 18: Imgsrc = "image/20.jpg"; num = 18; break;
    }
    document.Image.src = Imgsrc;

    text = aboutCh(num);
    document.getElementById("name").innerText = text;
}
function submit() {
    document.getElementById("textarea").value = "";
}

function aboutCh(num) {
    switch (num) {
        case 1: text = "선택된 학생은 김세이입니다!!!"; break;
        case 2: text = "선택된 학생은 김아라입니다!!!"; break;
        case 3: text = "선택된 학생은 김지연입니다!!!"; break;
        case 4: text = "선택된 학생은 나현아입니다!!!"; break;
        case 5: text = "선택된 학생은 류지민입니다!!!"; break;
        case 6: text = "선택된 학생은 맹수연입니다!!!"; break;
        case 7: text = "선택된 학생은 박서빈입니다!!!"; break;
        case 8: text = "선택된 학생은 박서은입니다!!!"; break;
        case 9: text = "선택된 학생은 백민세입니다!!!"; break;
        case 10: text = "선택된 학생은 손승희입니다!!!"; break;
        case 11: text = "선택된 학생은 이승민입니다!!!"; break;
        case 12: text = "선택된 학생은 이승아입니다!!!"; break;
        case 13: text = "선택된 학생은 이예서입니다!!!"; break;
        case 14: text = "선택된 학생은 조순형입니다!!!"; break;
        case 15: text = "선택된 학생은 조현령입니다!!!"; break;
        case 16: text = "선택된 학생은 조혜령입니다!!!"; break;
        case 17: text = "선택된 학생은 지유정입니다!!!"; break;
        case 18: text = "선택된 학생은 최윤경입니다!!!"; break;
    }

    return text;
}