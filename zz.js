var a = [{
    name: "allen",
    age: 18
}, {
    name: "bob",
    
}]

function getAge(s) {
    for (var i = 0; i < a.length; i++) {
        if (s == a[i].name) {
            return a[i].age;
        }
    }
}

if (getAge("bob")) {
    console.log("find");
} else {
    console.log("no");
}
