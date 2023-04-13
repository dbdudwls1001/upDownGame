//랜덤 번호가 지정된다.                                     - 완료
//사용자가 번호를 입력하고 go 버튼을 누른다.                 - 완료
//번호보다 랜덤번호가 크면 up                               -완료
//번호보다 랜덤번호가 작으면 down                           -완료
//번호가 일치하면 정답입니다.                               -완료
//Go버튼이 disable처리 된다                            -완료
//chansetext 가 초기화 된다.                           -완료
//입력횟수 제한은 5로 제한                                  -완료
//입력횟수를 모두 소진 하면 게임이 끝이 난다                 -완료
//리셋 버튼 클릭 시 리셋 랜덤번호가 새로 생성되고, 입력횟수 초기화, 화면은 초기 화면으로 이동
//인풋값 초기화                                            -완료
//입력횟수 초기화                                          -완료
// 화면 초기화                                             -완료
//1~100제한에 외에 숫자를 넣을시 숫자는 차감하지 않고, 잘못입력했다는 메세지를 나오게 함  -완료
// 정답맞춘후 go버튼 비활성화 시키는데, 초기화 한번하고 다시 했을때 정상을 되어 있어야 함(초기화로직 확인)
//같은 숫자를 반복 입력 시 반복입력 했다는 메세지 나오게 함     -완료


let userinput = document.getElementById("user-input");
let gobtn = document.getElementById("go-btn");
let chansetext = document.getElementById("chanse-text");
let chance = 5;
let randemnum;
let resulttext = document.getElementById("result-text");
let gameover = false;
let resetbtn = document.getElementById("reset-btn");
let history = [];

gobtn.addEventListener("click", play);
userinput.addEventListener("focus", function () {
    userinput.value = "";
});
resetbtn.addEventListener("click", reset);


function play() {
    let uservalue = userinput.value;

    if (uservalue < 1 || uservalue > 100) {
        resulttext.textContent = "잘못된 입력값 입니다.";
        return;
    }
    if (history.includes(uservalue)) {
        resulttext.textContent = "이전 입력한 숫자입니다."
        return;
    }

    chance--;
    chansetext.textContent = `남은기회:${chance}번`;
    if (uservalue < randemnum) {
        resulttext.textContent = "UP!";
    } else if (uservalue > randemnum) {
        resulttext.textContent = "Down!";
    } else {
        resulttext.textContent = "정답입니다.";
        chansetext.textContent = "";
    // gameover = true;
    }
    history.push(userinput.value);
    //console.log(history);

    if (chance < 1) {
        gameover = true;
    }
    if (gameover == true) {
        gobtn.disabled = true;
    }
    // else{
    //     gobtn.disabled = false;
    // }



}
function reset() {
    userinput.value = "";
    randemNum();
    //gobtn.disabled = false;
    chance = 5;
    resulttext.textContent = "1부터 100까지의 숫자를 입력해 주세요";
    chansetext.textContent = `남은기회:${chance}번`;
}

function randemNum() {
    randemnum = Math.floor((Math.random() * 100) + 1);
    console.log('정답', randemnum);
    return randemnum;
}

randemNum()
