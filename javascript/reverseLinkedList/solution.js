'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

// SinglyLinkedListNode {
//   data: 1,
//   next: SinglyLinkedListNode {
//     data: 2,
//     next: SinglyLinkedListNode { data: 3, next: [SinglyLinkedListNode] }
//   }
// }

function reverse(llist) {
    let prev = null
    let currentNode = llist
    let next = null
    while (currentNode != null) {
        next = currentNode.next // data 2, next 3; data 3, next 4; data 4, next 5; data 5, next null; null
        currentNode.next = prev // data 1, next null; data 3, next 1; data 3, next 3; data 4, next 3; data 5, next 4;
        prev = currentNode // data 1, next null; data 3, next 1; data 3, next 3; data 4, next 3; data 5, next 4;
        currentNode = next // data 2, next 3; data 3, next 4; data 4, next 5; data 5, next null; null
    }
    return prev
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        let llist1 = reverse(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
