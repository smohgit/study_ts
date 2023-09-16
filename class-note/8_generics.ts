// function logText(text){
//     console.log(text);
//     return text;
// }
// logText(10)
// logText('하이')
// logText(true)


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// 호출 시점에 타입을 같이 넘겨줌
// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }
// logText(10)
// logText<string>('하이')
// logText(true)


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// 타입만 바뀐 같은로직으로 비효율적..
// function logText(text: string){
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }


// logText('하이')
// logText(10)
// const num = logNumber(10);
// logText(true)

/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// union type으로 대체
// function logText(text: string | number){
//     console.log(text);
//     return text;
// }

// const a = logText('하이')
// console.log(a)  // 문자를 넣었음에도 a값도 string | number 유지
// a.split('')     //  number에 split이 없어 오류


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('하이')
str.split('')       // string으로 정의되어 오류 안남

const asd = logText<boolean>(true);

// 활용 사례 : example/dropdown-generic


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

const dropDownObj: Dropdown = {value : '10', selected: false};

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}
const dropDownObj2: Dropdown2<number> = {value : 10, selected: false};


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// 제네릭 사용 이유 : 코드를 간결하게 하고 재사용성을 높입니다. 컴파일 이후 런타임 단계에서 타입 문제가 발생될 가능성을 방지해줍니다.

// 제네릭의 타입 제한(추가 힌트)
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length)
    text.forEach(function (text){
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi']);


// 제네릭의 타입 제한 2 - 정의된 타입 이용
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T{
    console.log(text.length)
    return text;
}
logTextLength2('a');
logTextLength2(10);     // 숫자형은 length 지원안하여 오류
logTextLength2({ length: 10 });     // 객체에 length가 있어서 가능


// 제네릭의 타입제한 3 - keyof : key값만 들어갈 수 있음.
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T>(itemOption: T): T{
    return itemOption;
}
getShoppingItemOption(10)
getShoppingItemOption('a')

function getShoppingItemOption2<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
getShoppingItemOption2('name')








