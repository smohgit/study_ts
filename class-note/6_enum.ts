// 숫자형 enum
enum Shoes {
    Nike,
    Adidas,
}
enum ShoesNum {
    Nike = 10,
    Adidas,     // 11이됨
}
var myShoes = Shoes.Nike;
console.log(myShoes);   // 0


// 문자형 enum
enum ShoesChr {
    Nike = '나이키',
    Adidas = '아디다스',  
}
let myShoesChr = ShoesChr.Nike;
console.log(myShoesChr);   // 나이키


/* **************************************************************************************
*****************************************************************************************
************************************************************************************** */
// 활용 예제
function askQuestion(answer : string) {
    if(answer === 'yes'){
        console.log('정답')
    }
    if(answer === 'no'){
        console.log('오답')
    }
}

askQuestion('예스')
askQuestion('y')
askQuestion('Yes')

// enum 사용시
enum Answer {
    Yes = 'Y',
    NO = 'N',
}
function askQuestionE(answer : Answer) {
    if(answer === Answer.Yes){
        console.log('정답')
    }
    if(answer === Answer.NO){
        console.log('오답')
    }
}

// askQuestionE('예스')     //  error
// askQuestionE('Y')       //  error
// askQuestionE('Yes')     //  error
askQuestionE(Answer.Yes)     
