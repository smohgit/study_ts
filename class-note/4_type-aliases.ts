interface Person {
    name: string;
    age: number;
}

type PersonT = {
    name: string;
    age: number;
}


// type, interface 차이점 
//      - type은 타입에 대한 별칭이므로 프리뷰에서 실제 모습을 보여줌
//      - type은 확장이 되지않음(좋은 소프트웨워는 확장이 용이해야 함)
var seho: Person ={
    name: '세호',
    age: 30,
}


var sehoT: PersonT ={
    name: '세호',
    age: 30,
}