let user = {
  name: "John",
  age: 30,
  sizes: {
    height: 182,
    width: 50
  }
};
let clone ={};
for (let key in user){
  let type= typeof(user[key]);
  if(type === "object"){
    // alert('yes');
    Object.assign(clone[key],user[key]);
  }
  else{
    // alert("no");
    clone[key]=user[key];
  }
}

for(let key in clone){
  console.log(key+" : "+clone[key]);
}