Java script object
1. Creating an object 
2. Updating an Object
3. Deleting an object

const myOBJ={};
myOBJ["ankit"]=20;
console.log(myOBJ)

myOBJ["prashant"]=myOBJ["ankit"]
//delete myOBJ["ankit"]
console.log(myOBJ);

Array using new keyword

const car=new Array('BMW','Volvo','Tata');
console.log('My result of Car Array is ',car);

console.log('Data type of car :',typeof(car));
console.log('Finding Array length :',car.length);

car[3]='Maruti'
car[1]='Kia'
console.log('My result of Car Array is ',car);

const MyInfo=['Ankit',25,'Developer',9069007793]
console.log(MyInfo.sort())

const lastElement=[MyInfo.length-1];


console.log(MyInfo[lastElement])
