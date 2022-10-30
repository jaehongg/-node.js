const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const queue = [];
let result = '';

input.forEach(input => {
  if (input.includes('push')) {
    queue.push(input.split(' ')[1]);
  }
  else if (input === 'pop') {
    result += queue.length ? queue.shift() + '\n' : '-1' + '\n';
  }
  else if (input === 'size') {
    result += queue.length + '\n';
  }
  else if (input === 'empty') {
    result += queue.length ? 0 + '\n' : 1 + '\n'
  }
  else if (input === 'front') {
    result += queue.length ? queue[0] + '\n' : '-1' + '\n'
  }
  else if (input === 'back') {
    result += queue.length ? queue[queue.length - 1] + '\n' : '-1' + '\n'
  }
})

console.log(result);