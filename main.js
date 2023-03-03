let name1 = prompt("Enter first name");
let name2 = prompt("Enter second name");

let vowelCount = function(a){
let m=0;
     for(i=0; i<a.length; i++){
	     if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u" || a[i] == "A" || a[i] == "E" || a[i] == "I" || a[i] == "O" || a[i] == "U"){
		     m++;
		  }
	}
	 return m;
	     
}


let count1 = vowelCount(name1);
let count2 = vowelCount(name2);

if(count1 > count2){
	     document.write(`${name1} has more vowels`)
	}
	else{
	     document.write(`${name2} has more vowels`)
		}