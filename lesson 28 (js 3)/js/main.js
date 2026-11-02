
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