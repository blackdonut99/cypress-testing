function findPattern() {
    let seq = [1,2,2,4,8,12,96];

    for (let i = 7; i < 12; i++) {
        let nextNum;

        if ((i - 1) % 2 == 0) {
            nextNum = seq[i - 2] + seq[i - 1];
        }
        else {
            nextNum = seq[i - 2] * seq[i - 1];
        }

        seq.push(nextNum);
        
    }
    console.log(seq.slice(7));
}

findPattern();