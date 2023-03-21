const reverseSeq = n => {
    let arr = [];
    let i = 0;
    for (n; n >= 0; n--) {
        arr[i] = n;
        i++;
    }
    console.log(arr);
};


reverseSeq(4);