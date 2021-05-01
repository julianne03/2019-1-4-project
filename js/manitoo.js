function changeImage() {
    x = parseInt(Math.random() * 18);

    Imgsrc = `image/${x+1}.jpg`;
    document.Image.src = Imgsrc;

    text = aboutCh(x);
    document.getElementById("name").innerText = text;
}
function submit() {
    document.getElementById("textarea").value = "";
}

function aboutCh(num) {
    student_name_list = ['김세이','김아라','김지연','나현아','류지민','맹수연','박서빈','박서은','백민세','손승희','이승민','이승아','이예서','조순형','조현령','조혜령','지유정','최윤경'];
    
    text = `선택된 학생은 ${student_name_list[num]}입니다!`;

    return text;
}