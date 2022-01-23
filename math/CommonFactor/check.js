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
    number1=(document.getElementById("number1").value)
    number2=(document.getElementById("number2").value) 
    if (number1>0 && number2>0){
        end1=check1(number1)
        end2=check1(number2)
        result=[]
        console.log(end1)
        console.log(end2)
        for (i=0;i<end1.length;i+=1){
            //console.log(end1[i])
            for (a=0;a<end2.length;a+=1){
                //onsole.log(end2[a])
                if (end1[i]==end2[a]){
                    result.push(end1[i])
                }
            }
        }
        console.log(result)
        output(number1+"和"+number2+"的公因數是"+result+"\n最大公因數:"+result[result.length-1])
    }else{
        alert('輸入錯誤！！我不接受小於０的數字！！')
    }
}
