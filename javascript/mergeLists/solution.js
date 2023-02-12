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

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let merged = new SinglyLinkedList();
    let dataArray = []
    while (head1 || head2) {
        if (head1 !== null) {
        dataArray.push(head1.data)
        head1 = head1.next
        }

        if (head2 !== null) {
        dataArray.push(head2.data)
        head2 = head2.next
        }
    }

    dataArray.sort((a,b) => a - b).forEach(val => merged.insertNode(val))
    return merged.head
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}


// TODO: implement actual LinkedList sort while looping through both of them

// while (head1 && head2) {
//     if (head1.data === head2.data) {
//       merged.insertNode(head1.data)
//       merged.insertNode(head2.data) //2nd: list[data] = 2 next 3 next 3, next = null
//       head1 = head1.next //2nd head1 = 1, next = null
//       head2 = head2.next //2nd head2 = 4, next = null
//     } else if (head1.data > head2.data) {
//       merged.insertNode(head2.data)
//       head2 = head2.next
//     } else {
//       merged.insertNode(head1.data) //1st: list[data] = 2, next = null, 3rd list[data] = 2 next 3 next 3 next 1
//       head1 = head1.next //1st: head 3, 3rd head1 null, head2 4
//     }
//   }
//   merged.tail.next = (head1) ? head1 : head2

// SinglyLinkedListNode {
//   data: 1,
//   next: SinglyLinkedListNode {
//     data: 2,
//     next: SinglyLinkedListNode { data: 3, next: null }
//   }
// }
// SinglyLinkedListNode {
//   data: 3,
//   next: SinglyLinkedListNode { data: 4, next: null }
// }
