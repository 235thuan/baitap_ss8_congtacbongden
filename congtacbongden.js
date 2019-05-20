let SwitchButton = function () {
    //property
    this.status = true;
    this.lamp = ElectricLamp;
    //method
    this.switchButton = function () {
        if (this.status) {
            this.switchOff();
        } else {
            this.switchOn();
        }
    };
    this.connectToLamp = function (electric) {
        this.lamp = electric;
    };
    this.switchOff = function () {

        this.status = false;
        this.lamp.turnOff();

    };
    this.switchOn = function () {
        this.status = true;
        this.lamp.turnOn();
    };
};

let ElectricLamp = function () {
    //properties
    this.status = true;
    //method
    this.electricLamp = function () {
        if (this.status) {
            alert("Light on!");
        } else {
            alert("Light off");
        }
    };
    this.turnOff = function () {
        this.status = false;
        this.electricLamp()
    };
    this.turnOn = function () {
        this.status = true;
        this.electricLamp()
    }
};

let switch1 = new SwitchButton();
let lamp1 = new ElectricLamp();
switch1.connectToLamp(lamp1);


function switchLamp() {
    switch1.switchButton();
}
