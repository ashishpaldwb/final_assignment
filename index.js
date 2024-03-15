
let c1 = { a: 3, b: 2, c: 8 };

let c2 = { d: 12, e: 25, f: 15 };

let c3 = { g: 0.5, h: 1, i: 2 };

// 0 -5kg ====> 10/km
// additional 5kg ====> 18/km

// eg.  A-1, B-1, C-1, D-1 will give the output as 168

let input = { 
    a: 1, b: 1, c: 1, d: 1
}

function func(input) {
    let cost=0;
    for(let k in input) {
        if(c1[k]){
            c1[k]>5? cost += 8*km : cost += 10*km
        } else if(c2[k]){
            c1[k]>5? cost += 8*km : cost += 10*km
        } else if(c3[k]){
            c1[k]>5? cost += 8*km : cost += 10*km
        }
    }
}