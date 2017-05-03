//console.log() 매서드
console.log('숫자 : %d + %d = %d', 37, 37, 37+37);
console.log('문자열 : %s',"Hello World!");
console.log('JSON : %j', {name : 'RintIanTta'});

//console.time() 메서드
console.time('alpha');

var output = 1;
for(var i = 1; i<= 10; i++){
  output += 1;
}
console.log('Result : ', output);
console.timeEnd('alpha');

//글자색 적용
console.log('\u001b[31m', 'Hello World!');
console.log('\u001b[32m', 'Hello World!');
console.log('\u001b[33m', 'Hello World!');
console.log('\u001b[34m', 'Hello World!');
console.log('\u001b[35m', 'Hello World!');
console.log('\u001b[36m', 'Hello World!');
console.log('\u001b[1m');
console.log('\u001b[31m', 'Hello World!');
console.log('\u001b[32m', 'Hello World!');
console.log('\u001b[33m', 'Hello World!');
console.log('\u001b[34m', 'Hello World!');
console.log('\u001b[35m', 'Hello World!');
console.log('\u001b[36m', 'Hello World!');
console.log('\u001b[0m');
//ANSI코드 '\u001b[숫자m'
//0 : 초기화
//1 : 밝게
//30~37 글자 색 지정
//40~47 배경 색 지정
