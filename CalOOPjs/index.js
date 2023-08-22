"use-strict";
// class Calculator{
          
//      num1 = ""; 
//      num2 = "";
     
//      operator = "";

//      add = "+";
//      sub = "-";
//      multi = "*";
//      divs = "/";
      
//      res = 0;

//      displayvals(disval){
//         document.getElementById('userinput').value += disval 
//      }

//      storeval(ope){
//         this.num1 = document.getElementById('userinput').value
//         document.getElementById('userinput').value = null
//         this.operator = ope;
//      }
    
//     clear(){
//         this.num1 = 0; 
//         this.num2 = 0;
//         this.res = 0; 
//         this.operator = "";
//         document.getElementById('userinput').value = null
//     }

//      equal(){
//         this.num2 = document.getElementById('userinput').value
        
//         switch(this.operator){
//             case this.add:
//                 this.res = Number(this.num1) + Number(this.num2)
//             break;
//             case this.sub:
//                 this.res = Number(this.num1) - Number(this.num2)
//             break;
//             case this.multi:
//                 this.res = Number(this.num1) * Number(this.num2)
//             break;
//             case this.divs:
//                 this.res = Number(this.num1) / Number(this.num2)
//             break;
//         }
        
//         if(Number(this.num1) == 0 || Number(this.num2) == 0){
//             document.getElementById('userinput').value
//         }else{
//             document.getElementById('userinput').value = this.res
//         }
       
//      }
// } 

class Calculator{
    
    ui = document.getElementById('userinput')

    displayvals(disval){
       this.ui.value += disval 
    }
    clear(){
       this.ui.value = null
   }
    equal(){
       this.ui.value = eval(this.ui.value)
    } 
    checkdot(){
        if(this.ui.value.includes(".")){
            cnt = 1
        }else{
            cnt = 0
        }
    }
} 

const cal = new Calculator();
let cnt = 0;
const x = document.querySelectorAll(".btn")

// console.log(document.querySelectorAll(".btn"))

x.forEach((v, i, arr) => {
    const btn = v
    btn.addEventListener("click", (e) => {
        const val = e.target.dataset.martin
        if(val == "clear"){
            cnt = 0
            cal.clear();
        }else if(val == "equal"){    
            cal.equal();
            cal.checkdot();
        }
        else if(val == "."){  
            if(cnt == 0){
                cnt = 1
                cal.displayvals(e.target.dataset.martin);
            }else{

            }     
        }
        else if(val == "/" || val == "-" || val == "+" || val == "*"){
            cnt = 0
            cal.displayvals(e.target.dataset.martin);
        }
        else { cal.displayvals(e.target.dataset.martin); }
        
    })
})


