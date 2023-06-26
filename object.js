const obj = {
  name: "Yotam",
  age: 31,
  "key-three": true,
  0: "zero",
  sayMyName: () => {
    console.log(this.name);
  },
  sayMyNameAgain: function () {
    console.log(this.name);
  },
};

// console.log(obj)
// console.log(obj["key-three"])
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
obj.sayMyName();
// obj.sayMyNameAgain();
