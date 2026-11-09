
var car ={
    name:"lambo",
    year:"red",
    color:"2021",
    kilometers:"10000",
    startEngine: function(){
        alert("vroooom");
    },
    get getKilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometer = km
    }
}

console.log(car.getKilometers);

car.setkilometers = 100;

console.log(car.getKilometers);


var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU =  "GeForce GT730 ....";

computer.tybe = function(){
    return this.name + ' , ' + this.CPU + ' , ' + this.RAM + ' , ' + this.GPU;
};

alert(computer.GPU);

alert(computer.tybe());

delete computer.GPU;
alert(computer.GPU);



function Computer(name, CPU, GPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.GPU = GPU;
    this.RAM = RAM;
}

var computer1 = new Computer("Macbook pro", "M1 8-core", "5000M GPU", "8GB");
var computer2 = new Computer("Lenovo", "Intel core i7", "GeForce 1600 GPU", "16GB");

varbutoni1 = document.getElementById("btn1");
varbutoni2 = document.getElementById("btn2");
varbutoni3 = document.getElementById("btn3");

butoni1.oncliclck=function(){
    alert('Blerje e kryer');
} 


butoni2.onmouseover=function(){
    alert('sapo vendosa mausin permbi meje');
}


butoni3.onmouseleave=function(){
    alert('po largohet mause nga butoni');
}