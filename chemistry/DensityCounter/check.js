function resetsel(id){
var s = document.getElementById(id);
s.options.length = 0;
s.options.length=0
s.options.add(new Option("",0))
s.options.add(new Option("密度",1))
s.options.add(new Option("質量",2))
s.options.add(new Option("體積",3))
}

function resetinp(){
    $("#number1").prop('disabled',true)
    $("#number2").prop('disabled',true)
    $("#number3").prop('disabled',true)
}

function changeopt(from,target){
    var s1 =document.getElementById(from)
    var s2 =document.getElementById(target)
    var index = s1.selectedIndex
    s2.options.remove(index)
}
function onchanges1(){
    resetsel('s2')
    changeopt('s1','s2')
    $("#s2").prop('disabled',false)
    $("#number1").prop('disabled',true)
    $("#number2").prop('disabled',true)
    $("#number3").prop('disabled',true)
    $("#number1").val("")
    $("#number2").val("")
    $("#number3").val("")
}
function onchanges2(){
    s1v=$('#s1').val()
    s2v=$('#s2').val()
    console.log(s1v,s2v)
    if (s1v==1&&s2v==2||s1v==2&&s2v==1){
        console.log('a')
        $("#s3").val('體積')
        resetinp()
        $("#number1").prop('disabled',false)
        $("#number2").prop('disabled',false)
    }
    if (s1v==1&&s2v==3||s1v==3&&s2v==1){
        console.log('b')
        $("#s3").val('質量')
        resetinp()
        $("#number1").prop('disabled',false)
        $("#number3").prop('disabled',false)
    }
    if (s1v==2&&s2v==3||s1v==3&&s2v==2){
        console.log('c')
        $("#s3").val('密度')
        resetinp()
        $("#number3").prop('disabled',false)
        $("#number2").prop('disabled',false)
    }
}
function output(text){
    $('p').html(text)
}
function ongo(){
    console.log($("#number2").prop('disabled'))
    result=[]
    for (i=1;i<4;i++){
        var input="#number"+i
        result.push($(input).prop('disabled'))
    }
    console.log(result)
    if (result[0]==false&&result[1]==false){
        D=$('#number1').val()
        V=$('#number2').val()
        checkend=D*V
        console.log(checkend)
        $('#number3').val(checkend)
    }
    if (result[1]==false&&result[2]==false){
        M=$('#number2').val()
        V=$('#number3').val()
        checkend=M/V
        console.log(checkend)
        $('#number1').val(checkend)
    }
    if (result[0]==false&&result[2]==false){
        D=$('#number1').val()
        M=$('#number3').val()
        checkend=M/D
        console.log(checkend)
        $('#number2').val(checkend)
    }
}