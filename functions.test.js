const functions = require('./functions');

describe('XO', () => {
    test('xo should true', () => {
        expect(functions.XO('xo')).toBe(true);
    });
    
    test('xxOo should true', () => {
        expect(functions.XO('xxOo')).toBe(true);
    });
    
    test('xxxm should false', () => {
        expect(functions.XO('xxxm')).toBe(false);
    });
    
    test('Oo should false', () => {
        expect(functions.XO('Oo')).toBe(false);
    });
    
    test('ooom should false', () => {
        expect(functions.XO('ooom')).toBe(false);
    });
});

describe('nbYear', () => {

    test('should react 1200 in 3 years', () => {        
        expect(functions.nbYear(1000, 2, 50, 1200)).toBe(3);
    });

     test('should react 5000 in 15 years', () => {        
         expect(functions.nbYear(1500, 5, 100, 5000)).toBe(15);
     });

     test('should react 2000000 in 10 years', () => {        
         expect(functions.nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
     });

     test('should react 5000 in 15 years', () => {        
         expect(functions.nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
     });
     
});

describe("Volwes Count ", function(){
    test ("should be 5", function(){
        expect(functions.getCount("abracadabra")).toBe(5);
    });
    test ("should be 4", function(){
        expect(functions.getCount("serkan ertan")).toBe(4);
    });
    
    test ("should be 13", function(){
        expect(functions.getCount("o a kak ushakov lil vo kashu kakao")).toBe(13);
    });
});

describe('toJadenCase', () => {
  test("should be case", () => {
      expect(functions.toJadenCase("How can mirrors be real if our eyes aren't real")).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
  })
});

describe('sqrtDigits', () => {
  test('should 9119 to 811181', () => {
      expect(functions.squareDigits(9119)).toBe(811181);
  })
})

describe('findNextSquare', () => {
  test('should retunr the ext square for perfect squares', () => {
    expect(functions.findNextSquare(121)).toBe(144);
    expect(functions.findNextSquare(625)).toBe(676);
    expect(functions.findNextSquare(319225)).toBe(320356);
    expect(functions.findNextSquare(15241383936)).toBe(15241630849);

  })

  test("should return-1 for numbers whioch aren't perfect squares", () => {
    expect(functions.findNextSquare(155)).toBe(-1);
    expect(functions.findNextSquare(342786627)).toBe(-1);
  })
  
});

describe('DNAStrand', () => {
    test('should AAAA to TTTT', () => {
      expect(functions.DNAStrand('AAAA')).toBe('TTTT');
    });
    test('should ATTGC to TAACG', () => {
      expect(functions.DNAStrand('ATTGC')).toBe('TAACG');
    });
    test('should GTAT to CATA', () => {
      expect(functions.DNAStrand('GTAT')).toBe('CATA');
    });
    
});

describe('filter_list', () => {
  test('should filter [1, 2, a, b] to [1, 2]', () => {
    expect(functions.filter_list([1,2,'a','b'])).toEqual([1,2]);
    expect(functions.filter_list([1,'a','b',0,15])).toEqual([1, 0, 15]);
    expect(functions.filter_list([1,2,'aasf','1','123',123])).toEqual([1,2, 123]);
  })
  
})

describe('Bouncing Ball', () => {
    test('should bounce 3', () => {
        expect(functions.bouncingBall(3, 0.66, 1.5)).toEqual(3)
    });

    test('should condition 2 not fulfilled', () => {
        expect(functions.bouncingBall(3, 1, 1.5)).toEqual(-1)
    })

    test('should bounce 0 retunr -1', () => {
        expect(functions.bouncingBall(3, 0, 1.5)).toEqual(-1)        
    })
    test('should bounce 1 retunr -1', () => {    
        expect(functions.bouncingBall(3, 1, 1.5)).toEqual(-1)
    
    })
    test('should w = h retunr -1', () => {    
        expect(functions.bouncingBall(5, 0.66, 5)).toEqual(-1)
    })

    test('should bounce 15', () => {
        expect(functions.bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
    })
    
})

describe('firstNonRepeatingLetter', () => {
    test('should a ', () => {
        expect(functions.firstNonRepeatingLetter('a')).toEqual('a');
    });
    test('should stress ', () => {
        expect(functions.firstNonRepeatingLetter('stress')).toEqual('t');
    });
    test('should moonmen ', () => {
        expect(functions.firstNonRepeatingLetter('moonmen')).toEqual('e');
    });
    test('should sTreSS ', () => {
        expect(functions.firstNonRepeatingLetter('sTreSS')).toEqual('T');
    });
    test('should empty ', () => {
        expect(functions.firstNonRepeatingLetter('')).toEqual('');
    });
    
    test('should TTSSAA ', () => {
        expect(functions.firstNonRepeatingLetter('TTSSAA')).toEqual('');
    });
})



describe('digital_root', () => {
  
    test('should 16 to 7', () => {
        expect(functions.digital_root(16)).toEqual(7);
    })
    
    test('should 942 to 6', () => {
        expect(functions.digital_root(942)).toEqual(6);
    })
    test('should 132189 to 6', () => {
        expect(functions.digital_root(132189)).toEqual(6);
    })
    test('should 493193 to 2', () => {
        expect(functions.digital_root(493193)).toEqual(2);
    })
})



describe('findMissing', () => {
  
    test('should 7', () => {
      expect(functions.findMissing([1, 3, 5, 9, 11])).toEqual(7);
    })
    
    test('should 2', () => {
      expect(functions.findMissing([1, 3, 4])).toEqual(2);
    })
    
})
