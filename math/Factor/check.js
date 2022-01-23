//判斷是否因數
function Divide(num){
    if (parseInt(num)==num){
        return true
    }else{
        return false
    }
}
//算所有因數
function check1(num){
    var result = []
    for (var i = 1;i<=num;i++){
        if (Divide(num/i)){
            result.push(i)
        }
    }
    return result
}
//判斷是否質數
function check2(num){
    if (check1(num)[1]==num){
        return true
    }else{
        return false
    } 
}
//算出所有質數
function check3(num){
    result = []
    for (var i = 1;i<=num;i++){
        if (check2(i)){
            result.push(i)
        }
    }
    return result

}
function output(text){
    $('p').html(text)
}
function ongo(){
    number1=(document.getElementById("number").value)
    if (number1>0){
        select=document.getElementById("select").value
        //console.log(select);
        //此數所有的因數
        if (select==1){
            //console.log(number1.length)
            checkend=check1(number1)
            checkend1=[]
            console.log(checkend)
            for (i=0;i<=checkend.length;i++){
                if (checkend.length/2>i){
                    checkend1.push("<br>"+number1+"＝"+checkend[i]+"Ｘ"+checkend[checkend.length-(i+1)])
                }
            }
            output(number1+"的因數有"+checkend+checkend1)
        }
        //小於此數的質數
        if (select==2){
            checkend=check3(number1)
            //console.log(number1)
            output("小於"+number1+"的質數有"+checkend)
            
        }
        //此數所有的質因數
        if (select==3){
            result=[]
            checkend1=check1(number1)
            for(i=0;i<checkend1.length;i++){
                if (check2(checkend1[i])){
                    result.push(checkend1[i])
                }
            }
            console.log(result)
        output(number1+"的質因數有"+result)
        }
    }else{
        alert('輸入錯誤！！我不接受小於０的數字！！')
    }
    
}

