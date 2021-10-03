
let pluse = (n) => {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j == parseInt(n / 2)) {
                pattern += "+";
            } else if (i == parseInt(n / 2)) {
                pattern += "+"
            } else {
                pattern += " "
            }
        }

        pattern += "\n";
    }
    console.log(pattern);
}

pluse(13)
