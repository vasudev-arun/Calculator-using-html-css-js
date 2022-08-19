var IsDotPressed=0;
var operator,num1,num2,result;

function buttonclick(val){
    switch (val){
        case 1:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 2:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 3:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 4:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 5:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 6:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 7:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 8:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 9:{
            document.getElementById("screen").value+=val;
            break;
        }
        case 0:{
            document.getElementById("screen").value+=val;
            break;
        }
        case ".":{
            if(IsDotPressed==0){
                document.getElementById("screen").value+=val;
                IsDotPressed=1;
            }
            else{
                document.getElementById("screen").value;
            }
            
            break;
        }
        case "/":{
            num1=document.getElementById("screen").value;
            cleardisplay();
            IsDotPressed=0;
            operator=1;
            break;
        }
        case "*":{
            num1=document.getElementById("screen").value;
            cleardisplay();
            IsDotPressed=0;
            operator=2;
            break;
        }
        case "-":{
            num1=document.getElementById("screen").value;
            cleardisplay();
            IsDotPressed=0;
            operator=3;
            break;
        }
        case "+":{
            num1=document.getElementById("screen").value;
            cleardisplay();
            IsDotPressed=0;
            operator=4;
            break;
        }
        case "=":{
            num2=document.getElementById("screen").value;
            IsDotPressed=0;
            switch(operator){
                case 1:{
                    result=num1/num2;
                    document.getElementById("screen").value=result;
                    break;
                }
                case 2:{
                    result=num1*num2;
                    document.getElementById("screen").value=result;
                    break;
                }
                case 3:{
                    result=num1-num2;
                    document.getElementById("screen").value=result;
                    break;
                }
                case 4:{
                    result= parseFloat(num1)+ parseFloat(num2);
                    document.getElementById("screen").value=result;
                    break;
                }
            }

            break;
        }

    }
    

}
function cleardisplay(){
    document.getElementById("screen").value="";
    IsDotPressed=0;
}
function backspace(){
    document.getElementById("screen").value=document.getElementById("screen").value.toString().split('').slice(0, -1).join('')

}
