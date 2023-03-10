// function* magic() {
//     console.log(1);
//     yield 2;
//     console.log(3);
//     yield 4;
//     console.log(5);
// }
//
// const gen = magic();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function* numberGenerator() {
    let number = 1;
    while (1) {
        yield number;
        number++
        if (number > 3) {
            return "wagwan"
        }
    }
}

const numGen = numberGenerator();
const numGen2 = numberGenerator();

// console.log(numGen.next().value)
// console.log(numGen.next().value)
// console.log(numGen.next().value)
// console.log(numGen2.next().value)
// console.log(numGen.next().value)
// console.log(numGen.next().value)

function* magicCoro() {
    let a = 10;
    let b = yield 15 + a;
    yield b;
}

const coro = magicCoro();

// console.log(coro.next())
// console.log(coro.next(42))

function *getData() {
    const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/');
    console.log(response);
}

const dataGen = getData();

dataGen.next().value.then((response) => dataGen.next(response));
