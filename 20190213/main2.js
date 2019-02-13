/**
 * 2019-03-23
 * sample3.html에서 사용
 */

function showAlert(){
	window.alert("메세지만 출력하는 알림창");
}

function showConfirm(){
	var returnValue = window.confirm("찬성하면 확인, 반대하면 취소");
	document.getElementById("result").innerHTML = 
		"리턴값 확인 : "+ returnValue;
}

function showPrompt(){
	var inputValue = window.prompt("주소를 입력하세요");
	document.getElementById("result").innerHTML = "입력된 주소확인 : "+inputValue;
}

function inputValue(){
	var userName = document.getElementById("username").value;
	alert("입력된 이름 : "+userName);
}

function calculator(e){
	
	var n1 = Number(document.getElementById("n1").value);
	var n2 = Number(document.getElementById("n2").value);
	var result;
	
	switch(e){
	case "+" : result = n1 + n2; break;
	case "-" : result = n1 - n2; break;
	case "*" : result = n1 * n2; break;
	case "/" : result = n1 / n2; break;
	case "%" : result = n1 % n2; break;
	}
	
	document.getElementById("calc").innerHTML = n1 +" "+ e+" "+ n2+" = "+result;
}

function equalCheck(){
	alert("== 연산자 : "+(''== false) +", "+(''== 0)+", "+(0 == false)
			+", "+ ('273'==273)+"\n"+ "===연산자"+(''=== false) +", "+(''=== 0)+", "+(0 === false)
			+", "+ ('273'===273));
}

function switchCheck(){
	var today = new Date();
	var currentHour = today.getHours();
	console.log("현재시간 : "+ currentHour);
	
	switch(true){
	case currentHour === 9 : alert("업무시작 시간입니다."); break;
	case currentHour < 12 : alert("오전업무 시간입니다."); break;
	case currentHour == 12 : alert("점심 시간입니다."); break;
	case currentHour < 18 : alert("오후업무 시간입니다."); break;
	default : alert("업무시간이 아닙니다..");
	}
}

function logicCheck(){
	var value = Number(prompt("숫자 입력하세요"));
	// 짧은 조건문 : ||앞이 거짓이면 뒤를 실행
	// &&는 앞이 참이면 뒤를 실행
	value % 2 === 0 || alert("홀수입니다.");
	value % 2 === 0 && alert("짝수입니다.");
}








