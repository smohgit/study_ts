function logMessage(value: string){
    console.log(value)
}

logMessage('hello');
// logMessage(100); // error


// union type : 하나 이상의 타입 사용한는것
var sehoo: string | number | boolean;
function logMessage2(value: string | number){
    if(typeof value == 'number'){
        value.toLocaleString()   // 장점1(타입가드) : number인게 확인되면 속성 바로 사용가능 (any로 생성하면 안됨) 
    }
    if(typeof value == 'string'){
        value.toString()        // 장점1(타입가드) : string인게 확인되면 속성 바로 사용가능 (any로 생성하면 안됨) 
    }

    console.log(value)
}
logMessage2('hello');
logMessage2(100);



// union type 특징
//  - union type 활용시 공통 속성만 접속 가능
//      다른내용 필요시 타입가드 이용
interface Devloper5 {
    name: string;
    skill: string;
}

interface Person5 {
    name: string;
    age: number;
}

function askSomeone(someone: Devloper5 | Person5){
    someone.name
    // someone.age      // error
    // someone.skill    // error
}

/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// intersection 타입 : 모두 포함하는것
var seho5: string | number | boolean;
var capt5: string & number & boolean;   

function askSomeone2(someone: Devloper5 & Person5){
    someone.name
    someone.age      // no error
    someone.skill    // no error
}

/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// union vs intersection
askSomeone({name:'디벨로퍼', skill: '웹개발'})
askSomeone({name:'디벨로퍼', age: 30})

askSomeone2({name:'디벨로퍼', skill: '웹개발'})   // 다있어야함
askSomeone2({name:'캡틴', age: 30})         