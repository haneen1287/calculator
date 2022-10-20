const numbers=document.getElementsByClassName('numbers')
const op=document.getElementsByClassName('operations')
const input=document.getElementById('number')
const equal=document.getElementsByClassName('equal')[0]
let result=document.getElementsByClassName('result')[0]
let backspace=document.getElementsByClassName('backspace')[0]
let clear=document.getElementsByClassName('clear')[0]

let firstNum=''
let secondNum=[]

let operator=''






//first number

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',firstNumber)
    //    firstNum.push(input.value+=numbers[i].value)


} 

function firstNumber(event){

    let num=event.target
    input.value+=num.value
    firstNum+=num.value
}
Number(firstNum)

//operator
for(let i=0;i<op.length;i++){
    op[i].addEventListener('click',operationsFun)}
      // operator.push(input.value=op[i].value)

function operationsFun(event){
    let p=event.target
    input.value+=p.value
    operator=p.value
    secondNumber()

    
}

//second number

function secondNumber(){
    
for(let i=0;i<numbers.length;i++){
    numbers[i].removeEventListener('click',firstNumber)//?? lucky
    numbers[i].addEventListener('click',sec)
    //    arr.push(input.value+=numbers[i].value)
    //    secondNum=Number(arr[arr.length-1])
    //    arr=[]
  
    
}
function sec(event){
    let num=event.target
    input.value+=num.value
    secondNum+=num.value
}
}
Number(secondNum)


function operations(firstNum,operator,secondNum){
    switch(operator){
        case '*':
           result.innerHTML=(firstNum*secondNum)
            break
        case '+':
            result.innerHTML=+firstNum+ + secondNum
            break
        case '-':
            result.innerHTML=(firstNum-secondNum)
            break
        case '/':
            result.innerHTML=(firstNum/secondNum)
            break    
    }
}


equal.addEventListener('click',function(){
   operations(firstNum,operator,secondNum)
  
})



backspace.addEventListener('click',removeNum)///problem!!!!!
function removeNum(){
    input.value=input.value.slice(0,input.value.length - 1);
    return input.value
}

clear.addEventListener('click',c)
function c(){
    input.value=''
    result.innerHTML=0
}