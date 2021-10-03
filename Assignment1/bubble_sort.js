let sort = (...arr) => {
    let counter = 1
    const n = arr.length

    while (counter < n) {
        for (let i = 0; i < n - counter; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        counter++;
    }

    console.log(`after : ${arr}`);
}

const arr = [8, 6, 9, 2, 1, 3, 16];
console.log(`Bubble sort: \nbefore: ${arr}`);
sort(...arr)
