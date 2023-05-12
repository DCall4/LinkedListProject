function Node(value, nextNode) {
    return {
        value: value || null,
        nextNode: null
    }
}

function LinkedList() {
    //initializing first node and length of list
    let headNode = null;
    let length = 0;

    function append(value) {
        const newNode = Node(value);
        // updating list length
        length++; 
        if (headNode === null) {
            //first node
            return headNode = newNode; 
        }
        //used to crawl through list
        let crawler = headNode; 
        while (crawler.nextNode !== null) {
            crawler = crawler.nextNode;
        }
        //initiated at end of list
        crawler.nextNode = newNode; 
    };

    function prepend(value) {
        //puts node at the beginning of list
        let newNode = Node(value); 
        newNode.nextNode = headNode;
        headNode = newNode;
        length++;
    };

    function size() {
        //If list is empty return null
        if(!headNode) {
            return null;
        };
        //Return length of list
        return length;
    };

    function head() {
        if(!headNode) {
            //empty list returns null
            return null;
        }
        return headNode.value;
    };

    function tail() {
        if(!headNode) {
            //empty list returns null
            return null
        };
        let crawler = headNode;
        while (crawler.nextNode !== null) {
            crawler = crawler.nextNode;
        }
        return crawler
    }

    function at (index) {
        if(NaN(index)) {
            return null
        }
        if(!headNode) {
            //return null if list empty
            return null
        }
        let crawler = headNode;
        for (let i = 0; i < index; i++) {
            crawler = crawler.nextNode;
        }
        return crawler
    }

    function pop () {
        if(!headNode) {
            return null
        }
        //for a list with a single element
        if (headNode.nextNode === null) {
            head == null;
        }
        at(size() - 2).nextNode = null;
        length--;
    }

    function contains (value) {
        if (!headNode) {
            return false;
        }
        let crawler = headNode;
        //test last node
        let tailNode = tail();
        if (tailNode.value == value) {
            return true;
        }
        // test non tail nodes
        if(crawler.value == value) {
            return true;
        } else {
            while (crawler.nextNode !== null) {
                if(crawler.value == value) {
                    return true;
                } else {
                    crawler = crawler.nextNode;
                }
            }
            return false;
        }
    }

    function find (value) {
        if(!headNode) {
            return null
        };
        //initiate to 1 because first node is handled separately
        let index = 0;
        let crawler = headNode;
        //test first node
        if(crawler.value == value) {
            return 0;
        }
        //test last node 
        let tailNode = tail();
        if(tailNode.value == value) {
            //convert length to index
            return length - 1;
        }
        //test middle nodes
        while(crawler.nextNode !== null) {
            if(crawler.value == value) {
                return index
            } else {
                crawler = crawler.nextNode;
                index++;
            }
        }
    }

    function toString() {
        if(!headNode) {
            return null;
        }
        let crawler = headNode;
        console.log(crawler);
        //intialize string
        let listString = "";
        //for list of single element
        if (crawler.nextNode == null) {
            listString = listString.concat('( ' + crawler.value + ' ) --> null');
        } else {
            while(crawler.nextNode !== null) {
                console.log(listString);
                listString = listString.concat('( ' + crawler.value + ' ) --> ');
                crawler = crawler.nextNode;
            }
            listString = listString.concat('( ' + crawler.value + ' ) --> null');
            
        }
        console.log(listString);
        return listString;
    }

    function insertAt (value, index) {
        if(NaN(index)) {
            return null
        }
        if (index + 1 > length) {
            return null;
        }
        const newNode = Node(value);
        length++;
        let crawler = headNode;
        for (let i = 0; i < index - 1; i++) {
            crawler = crawler.nextNode;
        }
        let nextNode = crawler.nextNode;
        crawler.nextNode = newNode;
        newNode.nextNode = nextNode;
    };

    function removeAt(index) {
        if(NaN(index)) {
            return null
        }
        if (!headNode) {
            return null;
        }
        if (index + 1 > length || index < 0) {
            return null;
        }
        if (index == 0) {
            headNode = headNode.nextNode;
        } else {
            let preCrawler = at(index - 1);
            preCrawler.nextNode = preCrawler.nextNode.nextNode;
        }
        length--
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

// const linkedList = LinkedList();

// linkedList.prepend("test1");
// linkedList.append("test2");
// linkedList.append("test3");
// console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
// console.log(linkedList.size()); // 3
// console.log(linkedList.head()); // return head Node
// console.log(linkedList.tail()); // Node { value: 'test3', nextNode: null }
// console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
// console.log(linkedList.at(4)); // There is no item for this index
// linkedList.pop();
// console.log(linkedList.toString()); // (test1) -> (test2) -> null
// console.log(linkedList.contains("test1")); // true
// console.log(linkedList.find("test2")); // 1
// linkedList.prepend("test3");
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
// linkedList.insertAt("test4",2);
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
// linkedList.insertAt("test5",8);
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
// linkedList.removeAt(2);
// console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null