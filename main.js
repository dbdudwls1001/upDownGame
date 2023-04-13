//랜덤번호 지정                                        - 완료
//유저가 번호를 입력한다 그리고 go 버튼을 입력한다       - 완료
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.           - 완료
//랜덤번호가 유저번호보다 작으면 Down                   - 완료
//랜덤번호가 유저번호보다 크면  Up                      - 완료
//리셋버튼을 누르면 게임이 리셋된다                      - 완료
//5회의 기회를 다쓰면 게임이 끝난다(버튼이 disable한다.)  - 완료
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지 않는다.       - 완료
//유저가 이미 입력한 숫자를 입력하면, 알려준다 , 기회를 깍지 않는다.        - 완료

let computerNum = 0;    //랜덤 번호를 받는 변수
let playButton = document.getElementById("play-button");    //고 버튼에 아이디를 가져옴ㅋdocument는 html자체를 뜻함
let userInput = document.getElementById("user-input");      //유저가 입력한 번호를 함수에 담는다(인풋한 숫자)
let resultArea = document.getElementById("result-area");    //결과값에 표시
let resetButton = document.getElementById("reset-button");  //리셋버튼 아이디 가져오기
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances-area");  //남은 기회를 함수에 담는다
let histrory = []                                           //이전에 시도한 숫자를 확인하기 위해 배열 형식으로 작성

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = "";
})                                                          // focus이벤트 넣어 마우스로 클릭시 초기화 된다.

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100 + 1); //Math.floor -> 소수점 뒷자리를 자른다.

    console.log(`정답`, computerNum);
}

function play() {
    let uservalue = userInput.value;
    console.log(uservalue);
    
    if (uservalue < 0 || uservalue > 100 || uservalue == "") {
        resultArea.textContent = '1과 100사이에 숫자를 입력해 주세요';
        return;
    }
    if(histrory.includes(uservalue)){                           //.includes가 포함되어 있는지를 확인
        resultArea.textContent = "이미 입력한 숫자입니다.";
        return;
    }


    chances--;
    chancesArea.textContent = `남은기회:${chances}번`;

    if (uservalue < computerNum) {
        resultArea.textContent = "UP!!!!!";

    } else if (uservalue > computerNum) {
        resultArea.textContent = "Down!!!!!";
    } else {
        resultArea.textContent = "정답!";
        chancesArea.textContent = "";
        gameOver = true;

    }
    
    histrory.push(uservalue);                           //history에 이전 입력 값을 넣어 준다.
    console.log(histrory);


    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }


}

function reset() {
    //user 인풋창이 깨끗이 정리 되어야함
    userInput.value = "";   //빈값을 넣어준다
    pickRandomNum();        //새로운 랜덤값을 부여한다.
    resultArea.textContent = "";
    playButton.disabled = false;
    chances = 5; //찬스초기화
    chancesArea.textContent = `남은기회:${chances}번`;
    //새로운 번호가 랜덤 번호를 생성한다.

}


pickRandomNum()