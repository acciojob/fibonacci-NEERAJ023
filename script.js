function fibonacci(num) {
// your code here
	let c=0;
	for(let i=2; i<num; i++){
		 c=a+b;
		a=b;
		b=c;
	}
	return c;
}
let a=0; 
let b=1;

let d=prompt("number");
alert(fibonacci(d));