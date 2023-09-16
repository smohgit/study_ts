class Person {
    private name : string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){      // 초기화 로직
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전문법 - 클래스 기반 코드
class App extends React.Component{

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App(){
    return <div>Hello Wold</div>
}
