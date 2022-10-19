// check prime or not
let N=15;
let count=0;

for(let i=0;i<=N;i++){
	if (i%N==0){
		count++;
	}
}
if (count==2){
	console.log("Prime Number");
}else{
	console.log("Not Prime Number");
}