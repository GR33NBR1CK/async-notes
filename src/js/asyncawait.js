// function *getData() {
//     const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/');
//     console.log(response);
// }
//
// const dataGen = getData();
//
// dataGen.next().value.then((response) => dataGen.next(response));

async function getData() {
    const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/');
    console.log(response);
}

// getData();
