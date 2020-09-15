function checkEmpty(text) {
    if (text.value.length == 0) {
        alert("빈칸을 채워주세요!!");
        return false;
    }
    alert("1-4반 학생임을 인증하셨습니다.");
    return true;
}