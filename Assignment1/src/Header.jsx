
const Head=()=>{

    let fun=()=>{
        alert("Welcome to React Header!")
      }
    return(

        <div>
            <h1>Answer1</h1>
            <button onClick={fun}>Click Me</button>
        </div>
    )
}

const ClickMeButton=()=>{

    let fun1=()=>{
        alert("Button was Clicked!")
    }
    return(
        <div>
            <button onClick={fun1}>Click Me1</button>
        </div>
    )
}

const CheckAge=()=>{
       
    let fun2=()=>{
       let age= Number(prompt("Enter your age"))

       if(age>=18){
        alert("You are an adult")
       }else{
        alert("you are minor")
       }
    }
    return(
        <div>
            <button onClick={fun2}>Check Age</button>
        </div>
    )
}

const CheckNumber=()=>{
       
    let fun3=()=>{
       let num= Number(prompt("Enter any number"))

       if(num>0){
        alert("Positive")
       }else if(num<0){
        alert("Negative")
       }else{
        alert("Zero")
       }
    }
    return(
        <div>
            <button onClick={fun3}>Check Number</button>
        </div>
    )
}

const ShowNumbers=()=>{
       
    let fun4=()=>{
        for(let i=1;i<=5;++i){
            console.log(i)
        }
    }
    return(
        <div>
            <button onClick={fun4}>Show Number</button>
        </div>
    )
}

const CountEvenNumbers=()=>{
       
    let fun5=()=>{

        let count=0;
        for(let i=1;i<=10;++i){
            if(i%2==0){
                count++;
            }
        }

        alert("Even Numbers are between 1 to 10 are "+count)
    }
    return(
        <div>
            <button onClick={fun5}>CountEvenNumbers</button>
        </div>
    )
}


export {Head,ClickMeButton,CheckAge,CheckNumber,ShowNumbers,CountEvenNumbers}