function genPassword(capital,smaller,number,special){
    var cap='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var small='abcdefghijklmnopqrstuvwxyz'
    var num='1234567890'
    var spl='#$%*&^/|.?!'
    var password='';
    for(var i=0;i<capital;i++){
    var index=Math.floor(Math.random()*cap.length);
    password=password+cap.charAt(index);
    }
    for(var i=0;i<smaller;i++){
        var index=Math.floor(Math.random()*small.length);
        password=password+small.charAt(index);
        }
    for(var i=0;i<number;i++){
        var index=Math.floor(Math.random()*num.length);
        password=password+num.charAt(index);
         }
    for(var i=0;i<special;i++){
        var index=Math.floor(Math.random()*spl.length);
        password=password+spl.charAt(index);
        }
    return password
}

function generate(){
    var passwordLength1=document.getElementById("ram1").value;
    var passwordLength2=document.getElementById("ram2").value;
    var passwordLength3=document.getElementById("ram3").value;
    var passwordLength4=document.getElementById("ram4").value;
    var generatePassword=genPassword(passwordLength1,passwordLength2,passwordLength3,passwordLength4);
    document.getElementById("output").innerHTML=generatePassword;
}