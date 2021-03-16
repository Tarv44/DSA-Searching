function binarySearch(array, value, start, end, count = 0) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        console.log('Count is', count)
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
        console.log('Count is', count)
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, count+1);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, count+1);
    }
};

const main = () => {
    const test1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

    console.log(binarySearch(test1, 16))
}

main()