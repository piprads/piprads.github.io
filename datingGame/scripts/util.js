

function generatePerson() {
	var i=0;
	var personArray = [];
	
	var randomnumber1=Math.random();
	randomnumber1 = Math.round(randomnumber1*100)/100;
	
	var randomnumber2=Math.random()* (1-randomnumber1) + 0;
	randomnumber2 = Math.round(randomnumber2*100)/100;
	
	var randomnumber3=Math.random()* (1-randomnumber2 - randomnumber1) + 0;
	randomnumber3 = Math.round(randomnumber3*100)/100;
	
	var randomnumber4=Math.random()* (1-randomnumber3 - randomnumber2 - randomnumber1) + 0;
	randomnumber4 = Math.round(randomnumber4*100)/100;
	
	var randomnumber5= Math.round((1 - randomnumber1 - randomnumber2 - randomnumber3 - randomnumber4)*100)/100;
	
	
	var randomnumber61=Math.random();
	randomnumber61 = Math.round(randomnumber61*100)/100;
	var randomnumber6 = 0 - randomnumber61;
	
	var randomnumber71=Math.random()* (1-randomnumber61) + 0;
	randomnumber71 = Math.round(randomnumber71*100)/100;
	var randomnumber7 = 0 - randomnumber71;
	
	var randomnumber81=Math.random()* (1-randomnumber71 - randomnumber61) + 0;
	randomnumber81 = Math.round(randomnumber81*100)/100;
	var randomnumber8 = 0 - randomnumber81;
	
	var randomnumber91=Math.random()* (1-randomnumber81 - randomnumber71 - randomnumber61) + 0;
	randomnumber91 = Math.round(randomnumber91*100)/100;
	randomnumber9 = 0 - randomnumber91;
	
	var randomnumber10= Math.round((1 - randomnumber61 - randomnumber71 - randomnumber81 - randomnumber91)*100)/100;
	randomnumber10 = 0 - randomnumber10;

	personArray[0] = randomnumber1;
	personArray[1] = randomnumber2;
	personArray[2] = randomnumber3;
	personArray[3] = randomnumber4;
	personArray[4] = randomnumber5;
	
	personArray[5] = randomnumber6;
	personArray[6] = randomnumber7;
	personArray[7] = randomnumber8;
	personArray[8] = randomnumber9;
	personArray[9] = randomnumber10;
	
	//alert(personArray[2]);
	//document.getElementById('label1').innerHTML = personArray;
	
	var personArrayNew = arrayShuffle(personArray);
	
	return personArrayNew;
}

function arrayShuffle(oldArray) {
	var newArray = oldArray.slice();
 	var len = newArray.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = newArray[i];
  		newArray[i] = newArray[p];
	  	newArray[p] = t;
 	}
	return newArray; 
};

function generateCandidates() {
	
	var personArray = generatePerson();
	var candidatesArray = new Array(20);
	for(var i=0; i<19; i++){
		candidatesArray[i] = new Array(11);
		for(var j=0; j<11; j++){
			var random01 = Math.round(Math.random(1.3) + 0);
			candidatesArray[i][j] = random01;
		}
	}
	
	candidatesArray[19] = new Array(11);
	for(var i=0; i<10; i++){
		if(personArray[i] > 0){
			candidatesArray[19][i] = 1; 
		}
		else{
			candidatesArray[19][i] = 0;
		}
	}
	
	var candidateArrayNew = arrayShuffle(candidatesArray);
		
	var tempString = "";
	for(var i=0; i<20; i++){
		candidateArrayNew[i][10] = 0;
		for(var j=0; j<10; j++){
			candidateArrayNew[i][10] += candidateArrayNew[i][j]*personArray[j];
		}
		candidateArrayNew[i][10] = Math.round(candidateArrayNew[i][10]*100)/100;
		tempString += candidateArrayNew[i][10] + " ";
	}

	return candidateArrayNew;
}

