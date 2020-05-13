function fibonacci(n) {
    const sequence = [0]
    if (n === 0) return sequence
    if(n === 1) {
        sequence.push(1)
        return sequence
    }
    if(n > 1) {
        sequence.push(1);
        for(let i = 2; i< n; i++) {
            const lastNumber = sequence.length - 1
            const number = sequence[lastNumber] + sequence[lastNumber - 1];
            sequence.push(number)
        }
        return sequence;
    }
};

console.log(fibonacci(8));

function balancedBrackets(string) {
    const bracket = ['{', '}', '[', ']', '|', '(',')'];
    const bracketArr = string.split('').filter((item)=> {
        return bracket.includes(item) === true
    });
    const cacheBracket = {
        '{':'}',
        '[': ']',
        '(': ')',
    }
    let sum = 2
    const arrStore = []
    for (let i = 0; i< bracketArr.length; i++) {
        if(bracketArr[i] === '|' ) {
            sum++
        }
        if(bracketArr[i] === '{' || bracketArr[i] === '[' || bracketArr[i] === '(') {
            arrStore.push(bracketArr[i])
        } else {
            if(bracketArr[i] !== '|') {
                const oppBracket = arrStore.pop()
                if(bracketArr[i] !== cacheBracket[oppBracket] && bracketArr[i] !== '|' ) {
                   return 0
                }
            }
        }
    }
    if(arrStore.length) {
        return 0
    }
        return sum % 2 === 0 ?  1: 0
};

console.log(balancedBrackets('{{||[]||}}'))