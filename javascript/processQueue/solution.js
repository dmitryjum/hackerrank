function processData(input) {
    let queue = []
    const controlObject = {
        "1": function(el) {
            queue.push(el)
        },
        "2": function() {
            queue.shift()
        },
        "3": function() {
            console.log(queue[0])
        }
    }
    const inputLines = input.split("\n")
    inputLines.shift()
    inputLines.forEach((val) => {
        const keyVal = val.split(" ")
        controlObject[keyVal[0]](keyVal[1])
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
