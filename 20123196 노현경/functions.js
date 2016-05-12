//Question1
console.log("hello homework3");

//Question2
function stringToInt(input){
	if( typeof(input) == typeof(""))
	{
		return parseInt(input);	
	}
	else
	{
		console.log("NaN");
	}	
}

//Question3
function maskNumber(input){
	var mask_number;	
	mask_number = input.substr(0,7);
	mask_number = mask_number +"****";	
	return mask_number;
}

//Question4
function getAverage(input_array){
	var sum = 0;
	var num = input_array.length;	
	var avg ;
	for(var i=0;i< num;i++)
	{		
		sum = sum+input_array[i];
	}
	avg = sum/num;
	return avg;
}

//Question5
function isMultipleSeven(input){
	if( (input%7)=== 0 )
	{
		return true;
	}	
	else
	{
		return false;
	}
}

//Questionk6
function operation(arg,num1,num2)
{
	switch(arg)
	{
		case "add":
		return num1+num2;
		break;

		case "substract":
		return num1-num2;
		break;

		case "multiply":
		return num1*num2;
		break;

		case "divide":
		return num1/num2;
		break;

		default:
		console.log("Not Supported");
		break;
	}	
}

//Question7
function triangleMtn(input){
	var tri= "";
	for(var i = 0;i<input;i++)
	{
		for(var j = 0; j<=i;j++)
		{
			tri = tri+"*"; 
		}
		tri = tri+"\n";
	}
	console.log(tri);
	return ;
}
