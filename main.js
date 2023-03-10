//랜덤번호 지정
//유저가 번호를 입력한다 그리고 고버튼을 입력한다
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 유저번호보다 낮으면 다운
//랜덤번호가 유저번호보다 크면  업
//리셋버튼을 누르면 게임이 리셋된다
//5회의 기회를 다쓰면 게임이 끝난다(버튼이 disable한다.)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다, 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 입력하면, 알려준다 , 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");    //고 버튼에 아이디를 가져옴ㅋdocument는 html자체를 뜻함
let userInput = document.getElementById("user-input");      //유저가 입력한 번호를 함수에 담는다(인풋한 숫자)
let resultArea = document.getElementById("result-area");    //결과값에 표시
let resetButton = document.getElementById("reset-button");  //리셋버튼 아이디 가져오기
let chancesArea = document.getElementById("chances-area");  //남은 기회를 함수에 담는다
let chances = 5;
let gameOver = false;

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100+1);

    console.log(`정답`,computerNum);
}

function play(){
    let uservalue = userInput.value;

    chances --;     
    chancesArea.textContent = `남은기회는${chances}입니다`;
    
    if(uservalue < computerNum){
        resultArea.textContent = "UP!!!!!";
    }else if(uservalue > computerNum){
        resultArea.textContent = "Down!!!!!";
    }else{
        resultArea.textContent = "Good!!!!!";
        chancesArea.textContent = `축하.`
    }

    if(chances < 1){
        gameOver = true;
    } 

    if(gameOver == true){
        playButton.disabled = true;
    }

    
}

function reset(){
    //user 인풋창이 깨끗이 정리 되어야함
    userInput.value = "";   //빈값을 넣어준다
    //찬스초기화
    
    chancesArea.textContent = `남은기회는${chances}입니다.`
    //새로운 번호가 랜덤 번호를 생성한다.
    pickRandomNum();        //새로운 랜덤값을 부여한다.
    resultArea.textContent = "결과가 나온다.";
    
}

pickRandomNum()