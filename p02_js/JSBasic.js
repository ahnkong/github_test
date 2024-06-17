//<JSBasic.js>


/*
var 변수
- 덮어 쓰기, 재선언 가능

*/


var a_val = "var 변수"
console.log(a_val)

a_val="덮어쓰기"
console.log(a_val)

var a_val = "재선언 가능"
console.log(a_val)

console.log()
/*ctrl + alt + n  실행 단축키*/


//----------------------

/*
let 변수
- 덮어쓰기, 재선언은 불가
*/

let b_val = "let"
console.log(b_val)

b_val ="수정 가능"
console.log(b_val)

//let b_val="재선언 불가" //error

console.log()



//------------------------------
/*
const 변수
- 덮어쓰기, 재선언 모두 불가
- 객체, 배열 등의 object type은 값 변경이 가능합니다.
*/

const z_val = "const"
console.log(z_val)

//z_val = "수정 불가" //error

//const z_val =" 재선언도 불가" // Error

//그러나 이건 가능
//객체
const objA = {
    name: "objA",
    age: 100
}
console.log(objA)

// 속성 값 변경
objA.age= 20
console.log(objA)

console.log()


//배열 생성
const arrA = ['멍뭉이','냐옹이']
console.log(arrA)

 //요소 추가도 가능
 arrA.push('리자몽')
 console.log(arrA)

 console.log(arrA)

//-------------------------------

/*

템플릿 문자열
- 멀티라인 문자열을 쉽게 작성할 수 있습니다.
-`(백틱)으로 문자열을 감싸줍니다.
- + 기호 없이 한번에 가능
- '  " 랑 뭐가 다를까?


 -${} 안에 변수를 적용할 수 있습니다.
 */



// 기존
const ea = 20
 const message = "수량 : " + ea; // 1) + 로 해주는거 
 console.log(message)

 const tms = `수량 : ${ea}`   // 2)백틱으로 감싸주는 거 결국은 같다. ${}안에 들어가줘야함
 console.log(tms)


 function month(){
    return "9월";
 }
const currentMonth = `지금은 ${month()} 입니다.`
console.log(currentMonth)

//--------------------------------------

/*
화살표 함수 : () => {}
    - ES2015(ES6)에 추가된 함수 표기법입니다.
*/

// 기존 함수
function funcA(value){
    return value;
}
console.log(funcA("기본 함수 작성"))

const funcB = function(value){
    return value;

}
console.log(funcB("함수를 변수에 저장"))



// 화살표 함수
const arrowA = (value) => {
    return value; //여기서 출력 되는 것 : 함수는 매개변수로 전달된 값을 그대로 반환
}
console.log(arrowA("화살표함수")) // "화살표함수"라는 문자열이 arrowA의 매개변수 value로 전달되어 출력

//화살표 함수의 매개변수가 하나인 경우 괄호 ()를 생략할 수 있습니다. 
//                         두개인 경우에는 중괄호를 붙여야 한다.
const arrowB = value => {
    return value; //함수는 매개변수로 전달된 값을 그대로 반환
}

console.log(arrowB("매개변수 하나")) //"매개변수 하나"라는 문자열이 arrowB의 매개변수 value로 전달되어 출력


//화살표 함수의 매개변수가 2개 이상이면 () 사용
const arrowC = (v1, v2) => {
    return v1 + v2;
}
// arrowC에 대한 수식을 만들어두고,
// 밑에서 사용하는 너낌
console.log(arrowC(6,12))


// 화살표 함수의 본문이 하나의 행이라면 {}과 return문을 작성하지 않아도 됩니다.
const calcSumA = (v1, v2) =>  v1 + v2
 
console.log(calcSumA(4,12))

// {} 를 사용하고 return 문을 생략하면 자동으로 반환되지 않습니다.
const calcSumB = (v1, v2) => {
    v1 + v2 
}
console.log(calcSumB(1,2)) //undefined

//함수 본문이 여러 행이면 {}를 사용해야 합니다.
const calcSumC = (v1, v2)=>{
    let sum= v1  + v2
    let result = `${v1} + ${v2} = ${sum}`
    return result;
}

console.log(calcSumC(12,54))
//-------------

/*

# 분할 대입 : {}, []     ** 배열이나 객체의 구조를 분해하여 개별 변수에 값을 할당
- 코드의 가독성을 높이고 변수를 보다 효율적으로 관리
- 객체나 배열로부터 값을 추출할 때 사용합니다.
*/

// 분할 대입 적용 X
const people = {
    pname : "manA",
    page : 20
}

const peopleInfo = `이름 : ${people.pname} - 나이 : ${people.page}`;
console.log(peopleInfo)

// 분할 대입 적용 0 
const { pname, page } = people;
const peopleInfo2 = `이름 : ${pname} - 나이 : ${page}`;
console.log(peopleInfo2)


// : 을 사용해서 속성에 별명 지정
// 별명   pname: aliasName, page: aliasAge 
const { pname: aliasName, page: aliasAge } = people;
const peopleInfo3 = `이름 : ${aliasName} - 나이 : ${aliasAge}`;
console.log(peopleInfo3)

// 별명 :  pname: ahn, page: minjung
const { pname: ahn, page: minjung } = people;
const peopleInfo4 = `이름 : ${ahn} - 나이 : ${minjung}`;
console.log(peopleInfo4)


// 배열생성
const arrPro = ["manB", 30]         //-- 배열의 첫번째 요소 manB, 두번째 요소 30이다.


// 배열 분할 대입 - 대괄호
const [arrName, arrAge] = arrPro  // arr 배열의 첫번쨰 요소(manB)를 arrName 변수에 할당,
const proInfo = `배열 > 이름 : ${arrName} - 나이 : ${arrAge}`
console.log(proInfo)

// 별명이 아니라 변수명 적는거
const [ eName ] = arrPro
console.log(`이름 : ${eName}`)

/*

매개변수 기본값 
- 값이 없을 때 초기값을 설정할 수 있습니다.

*/
const sayHello = (stn="고객") => console.log(`${stn}님 안녕하세요`)
sayHello("test")    // 매개변수 test
sayHello()          // 매개변수 없을때, 초기값인 "고객"을 사용 




//객체 분할 대입의 기본값   -- 중괄호
const myPerson = { 
    personAge : 50,
}

const {personName = "guest"} = myPerson;
const personInfo = `이름 : ${personName}`;
console.log(personInfo)


//------------------------------------------

/*
스프레드 구문(...)
- 배열이나 객체를 개별 요소로 분리하는데 사용합니다.
- 스프레드 구문은... 과 같이 점 세개를 연결해서 사용합니다.

*/

const suArr = [1,2,3]   // 배열
console.log(suArr)      //배열 전체를 출력      

                        // 순자적으로 전개
console.log(...suArr)   // ...suArr : 배열의 각 요소를 개별적으로 분리
                        // console.log(...suArr);는 배열의 각 요소를 개별 인수로 전달

const arrayData = (n1, n2) => console.log(n1+n2)
arrayData(suArr[0], suArr[1])   //suArr[0] : 1 suArr[1] : 2
arrayData(...suArr)     // 배열 내부의 값을 순차적으로 전개 => 3

const suArr2 = [1,2,3,4,5]
const [n1,n2, ...arr3] = suArr2;    //분할 대입시 남은 요소 처리 => 1,2, [ 3,4,5]
console.log(n1)
console.log(n2)
console.log(arr3)


// 스프레드 구문을 사용한 복사
const cArr1 = [10, 20]
const cArr2 = [30, 40]
const cArr3 = [...cArr1]

console.log(cArr1)
console.log(cArr3)

cArr3[0] = 50
console.log(cArr1)
console.log(cArr3)


const sArr = cArr1          // 같은 배열을 참조 하기 때문에, 참조하는 배열의 값이 바뀌는 sArr , cArr 배열의 값이 모두 영향을 받는다.
console.log(cArr1)
console.log(sArr)

sArr[0] = 80
console.log(cArr1)
console.log(sArr)
//-----------------------------

// 두개의 배열 결합
const cArr4 = [5,6]
const cArr5 = [7,8,9]

const cArr6 = [...cArr4, ...cArr5]
console.log(cArr6)      //[ 5, 6, 7, 8, 9 ]


//----------------------------
//객체 복사, 결합
const objB = {pro1:10, pro2: 20}
const objC = {pro3:10, pro4: 20}

const objD = {...objB}

console.log(objD)  //{ pro1: 10, pro2: 20 }


const objE = {...objB, ...objC}
console.log(objE)


// -----------------------------
console.log()