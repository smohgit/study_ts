// 인터페이스 타입호환
interface Developer {
    name: number;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

person = developer;         // 호환가능
// developer = person;      // developer이 범위적으로 크기때문에 호환 불가능



// 함수 타입호환
var add = function(a: number){
    // ....
}
var sum = function(a: number, b: number){
    // ...
}

sum = add;      // 호환가능
// add = sum;      // sum이 범위적으로 크기때문에 호환 불가능



// 제네릭 타입호환
interface Empty<T> {
    // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T> {
    // ...
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;