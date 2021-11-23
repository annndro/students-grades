
function system(){
	let subjectNum=prompt("How many subjects do you take?")
	let studentAccount=[subjectNum];
	let grade="";

	//get user input using a loop & populate the array  
	for(i=0;i<subjectNum;i++){
		studentAccount[i]=prompt("Please enter result for "+(i+1)+" subject: ");
		
		//assign grade to each result
		if (studentAccount[i]>=85){
			grade="A";
		}
		else if(studentAccount[i]>=70 && studentAccount[i]<85){
			grade="B";
		}
		else if(studentAccount[i]>=55 && studentAccount[i]<70){
			grade="C";
		}
		else if(studentAccount[i]>=40 && studentAccount[i]<55){
			grade="D";
		}
		else if(studentAccount[i]>=25 && studentAccount[i]<40){
			grade="E";
		}
		else if(studentAccount[i]>=10 && studentAccount[i]<25){
			grade="F";
		}
		else {
			grade="N/G";
		}
		//print everything on the screen
		document.getElementById("showResults").innerHTML +=("Subject "+(i+1)+" points: "+
		studentAccount[i]+"    Grade: "+grade+"<br>");
	}
}