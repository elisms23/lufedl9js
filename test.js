function getFact() {
    let a = (Math.floor((Math.random() * 15)) + 1);
    console.log(a);
    let n = 1;
    for (i = 1; i <= a; i++) {
        n = (n * i);
        }
    console.log(n); 
}

function getTableY() { 
    let minx = prompt('введите минимум x') * 1;
    let maxx = prompt('введите максимум x') * 1;
    let step = prompt('введите шаг x') * 1;
    console.log(minx, maxx, step);
    while (minx <= maxx) {
        y = (-0.23 * (minx * minx)) + minx;
        console.log(minx, y);
        minx = step + minx;
    }
}

function calcNumbers() {
    const rand = (Math.floor((Math.random() * (100000000 - 10000) + 10000)));
    console.log(rand);
    let b = 0;
    let a = rand;
    while (a > 0) {
        b = b + (a % 10);
        a = Math.floor(a / 10);
    }
    console.log(b);

    let d = rand;
    let c = 1;
    while (d >= 10) {
        c = c * (d % 10);
        d = Math.floor(d / 10);
    }
    console.log(c * d);
}

function proveEquation() {
    const a = (Math.floor(Math.random() * (1000000 - 10) + 10));
    console.log(a);
    let n = a;
    let b = 0;
    for (i = 0; i < a; i++) {
        b = b + n;
        n = n - 1;
    }
    console.log(b);
    if (b == (a * (a + 1)) / 2) {
        console.log('равенство верно');
    }
    else if (b != (a * (a + 1)) / 2) {
        console.log('равенство не верно');
    }
}

function calcFib() {
    let x = prompt('введите число') * 1;
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);
    for (i = 3; i <= x; i++) {
        let c = a + b;
        console.log(c);
        a = b; 
        b = c;
    }
}

function getMaxArray() {
    let array = [];
    for (i = 0; i < 20; i++) {
        rand = -(Math.random() * (100 - (-100)) - 100);
        array[i] = rand;  
    }
    console.log(array);
    let max = array[0];
    for (f = 0; f < array.length; f++) {
        if (max < array[f]) {
            max = f;
        }
    }
    console.log(array[max], max);
}

function reverseArray() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(array);
    for (j = 0; j < (array.length / 2); j++) {
        temp = array[j];
        array[j] = array[array.length - (j + 1)];
        array[array.length - (j + 1)] = temp;
    }
    console.log(array);
}

