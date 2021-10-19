function main(count, time, callback) {

    let i = 0
    const inter = setInterval(() => {
        i++
        callback(i)
        if (i === count) {
            clearInterval(inter)
        }
    }, time)

}

main(5, 1500, fun)

function fun(count) {
    console.log(`hello : ${count}`);
}