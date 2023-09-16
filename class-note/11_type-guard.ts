interface Developer{
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}


function introduce() : Developer | Person {
    return {name: 'Tony', age: 33, skill: 'Iron Making'}
}
var tony = introduce();
console.log(tony.skill);

// 타입가드 안썻을떄 소스가 지저분함
if((tony as Developer).skill){
    var skill = (tony as Developer).skill
    console.log(skill);
}else if((tony as Person).age){
    var age = (tony as Person).age
    console.log(age)
}


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer{
    return (target as Developer).skill !== undefined
}

// 타입가드 정의로 깔끔해짐!!!
if(isDeveloper(tony)){
    tony.skill
}else{
    tony.age
}