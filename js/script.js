/*
========================
Converter app codes
=======================
*/

//1. Temperature converter 

var temp1 = form1.temp1;
var unit1 = form1.unit1;
var unit2 = form1.unit2;
var result = form1.result;
var temp2;
function unitSame(e){
	if(unit1[unit1.selectedIndex].value == unit2[unit2.selectedIndex].value){
		temp2 = Number(temp1.value);
	}
	else if(unit1[unit1.selectedIndex].value == "c"){
		temp2 = Math.round(9/5*Number(temp1.value)+32);
	}
	else{
		temp2 = Math.round(5/9*Number(temp1.value-32));
	}
	result.value = "Temperature in "+unit2[unit2.selectedIndex].text+" is "+temp2;
	result.classList.add("result");
}
form1.addEventListener("change",unitSame);
