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

    displayvals(disval){
       document.getElementById('userinput').value += disval 
      
    }

   clear(){
       document.getElementById('userinput').value = null
   }

    equal(){
        document.getElementById('userinput').value = eval(document.getElementById('userinput').value)
    } 
} 

const cal = new Calculator();

function btnnum(val){
    cal.displayvals(val.innerHTML);
}
// function opbtn(op){
//     cal.storeval(op.innerHTML);
// }
document.getElementById('equale').onclick = () => {
    cal.equal();
}
document.getElementById('clear').onclick = () => {
    cal.clear();
}



