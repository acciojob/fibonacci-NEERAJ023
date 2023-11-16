function fibonacci(num) {
// your code here
	for(let i=2; i<num; i++){
		let c=a+b;
		a=b;
		b=c;
	}
	return c;
	
}
let a=0; 
let b=1;
module.exports = fibonacci;
alert(fibonacci(5));
