function randomNumber() {
    const randomNums = [];
    let sumNum = 0;

    for (let i = 0; i < 10; i++) {
        Num = Math.floor(Math.random() * 1000);
        randomNums.push(Num);
        sumNum += Num;
    }

    console.log("10 Random Num:" , randomNums);
    console.log("Sum of 10 Num:" , sumNum);
}

randomNumber();


