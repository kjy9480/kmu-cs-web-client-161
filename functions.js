// homework1
console.log("hello homework3");


// homework2
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

//homework3

function maskNumber(input){

	
	var mask_number;
	
	mask_number= input.substr(0,7);

	mask_number= mask_number +"****";
	
	

	return mask_number;

}

//homework4

function getAverage(input){

	var sum = 0;
	var num = input.length;
	
	var avg ;

	for(var i=0;i< num;i++)
	{
		
		sum= sum+input[i];
	}

	avg= sum/num;

	return avg 
}

//homework5

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

//homework6

function operation(arg,num_1,num_2)
{
	

	switch(arg)
	{
		case "add":
		return num_1+num_2;
		break;

		case "substract":
		return num_1-num_2;
		break;

		case "multiply":
		return num_1*num_2;
		break;


		case "divide":
		return num_1/num_2;
		break;


		default:
		console.log("Not Supported");
		break;

		

	}	

}

//homework7

function triangleMtn(input){

	var tri= "";

	for(var i = 0;i<input;i++)
	{

		for(var j = 0; j<=i;j++)
		{
			tri= tri+"*"; 
		}


		tri= tri+"\n";
	}

	console.log(tri);
	return ;
}
