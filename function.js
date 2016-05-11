console.log("hello homework3");

function stringToInt(input){
input=parseInt(input);
return input;
}

function maskNumber(input){
var mask_numberk=input.substr(0,7)+"****";
return mask_numberk;
}

function getAverage(input_array){
var avg=0.0;
for(var i=0;i<input_array.length;i++)
avg=avg+input_array[i];
avg=avg/input_array.length;
return avg;
}

function isMultipleSeven(input){
if(input%7==0)
return "true";
else
return "false";
}

function operation(oper,input1,input2){
var output=0.0;
if(oper=="add")
output = input1+input2;
else if(oper=="substract")
output = input1-input2;
else if(oper=="multiply")
output = input1*input2;
else if(oper=="divide")
output = input1/input2;
else{
console.log("Not Supported");
return;
}
return output
}

function triangleMtn(input){
var output='*';
for(var i=0;i<input;i++){
for(var j=0;j<i;j++)output+='*';
console.log(output);
output='*';
}
}
