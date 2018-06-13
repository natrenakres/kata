const functions = {
    add: (num1, num2) => num1 + num2,
    XO:  (str) => {        
        str = str.toLowerCase().split('');
        return str.filter(x=> x === 'x').length === str.filter(o => o === 'o').length;
    },
    nbYear : (p0, percent, aug, p) => {
        let years = 0;
        const _percent = percent / 100;
        let sum = 0;

        while (p > sum) {
            let _p0 = sum === 0 ? p0 : sum;
            sum = _p0 + (_p0 * _percent) + aug;
            
            years++;
        }

        return years;
    },
    longestConsec: (strarr = [], k = 0) => {
        if (strarr.length == 0 || k > strarr.length || k <= 0) {
            return '';
        }

        const newArray = strarr.sort((a, b) => a.length < b.length)
        let retval = '';
        for (let i = 0; i < k; i++) {
            const element = newArray[i];
            retval += element;            
        }

        return retval;
    }, 
    getCount : (str = '') => {
        let vowelsCount = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let strArray = Array.from(str);

        for (let i = 0; i < vowels.length; i++) {
            const c = vowels[i];
            vowelsCount += strArray.filter(x=> x === c).length;            
        }

        return vowelsCount;
    },
    toJadenCase : (str) => {        
        return str.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
    },
    squareDigits: (num = 0) => {        
        if(!Number.isInteger(num)) return 0;        
        return Number(Array.from(String(num)).map((v) => {            
            return Math.pow(Number(v), 2);            
        }).join(''));
    },
    findNextSquare: (sq = 0) => {
        let s = Math.sqrt(sq);
        if (Number.isInteger(s)) {
            return Math.pow(++s, 2);
        } 
        return -1;
    },
    DNAStrand: (dna = "") => {
        const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

        return Array.from(dna).map(c => {
            return pairs[c];
        }).join('');
    },
    filter_list : (l = []) => {
        return l.filter(x=> Number.isInteger(x));        
    },
    bouncingBall: (h, bounce, window) => {
        if (h <= window || bounce >= 1 || bounce <= 0) {
            return -1
        }

        let n1 = Math.log(window/h);
        let n2 = Math.log(bounce);

        let r = Math.floor( n1 / n2 ) * 2 + 1;
        if (Number.isNaN(r)) {
            return -1;
        }

        return r;
    },
    firstNonRepeatingLetter: (s = '') => {
        if (s === '') {
            return '';
        }

        const str = s;
        let tempStr = s.toLowerCase().split('');

        for (let i = 0; i < tempStr.length; i++) {
            const e = tempStr[i];
            const d = tempStr.filter(x => x === e).length;
            if( d === 1){                
                return str[i];
            }
        }

        return '';

    },
    digital_root: (n) => {
        
        if(n < 10 ) return n;

        return functions.digital_root(
            n.toString().split('').reduce((acc, d)=> { return acc + +d; }, 0)
        );
        
    },
    findMissing: (list) => {        
        const a1 = list[0];        
        const n = list.length + 1;
        const an = list[list.length-1];
        const S = 0.5 * (a1 + an)  * n;
        
        const sum = list.reduce(function (acc, x) {
            return acc + x;
        });

        return S - sum;
        
    }
    

}




module.exports = functions;