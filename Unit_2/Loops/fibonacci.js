var series = [0, 1];
let x = series.pop();
let y = series.pop();
let sum;


series.push(y);



while (series.length < 10) {
sum = x + y;
series.push(sum);
x = y;
y = sum;



}


console.log(series);