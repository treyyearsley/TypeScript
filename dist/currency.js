"use strict";
class USA {
    constructor(usdollar) {
        this.usdollar = usdollar;
    }
    getUSdollar() {
        return this.usdollar;
    }
}
class Chile {
    constructor(cpeso) {
        this.cpeso = cpeso;
    }
    getCpeso() {
        return this.cpeso;
    }
}
class Mexico {
    constructor(mpeso) {
        this.mpeso = mpeso;
    }
    getMpeso() {
        return this.mpeso;
    }
}
class Japan {
    constructor(yen) {
        this.yen = yen;
    }
    getYen() {
        return this.yen;
    }
}
class Europe {
    constructor(euro) {
        this.euro = euro;
    }
    getEuro() {
        return this.euro;
    }
}
class Australia {
    constructor(aeuro) {
        this.aeuro = aeuro;
    }
    getAeuro() {
        return this.aeuro;
    }
}
class Brazil {
    constructor(real) {
        this.real = real;
    }
    getReal() {
        return this.real;
    }
}
class Pakistan {
    constructor(rupee) {
        this.rupee = rupee;
    }
    getRupee() {
        return this.rupee;
    }
}
const usa = new USA(1.00);
const chile = new Chile(929.84);
const mexico = new Chile(18.15);
const japan = new Japan(150.18);
const europe = new Europe(0.95);
const australia = new Australia(1.58);
const brazil = new Brazil(4.99);
const pakistan = new Pakistan(279.59);
console.log("Here are the conversion rates to the US dollar for a few contries.");
console.log();
console.log("Chile: $", (chile), "chilean pesos to $", (usa), "U.S. dollars.");
console.log();
console.log("Mexico: $", (mexico), "mexican pesos to $", (usa), "U.S. dollars.");
console.log();
console.log("Japan: $", japan, "Japanese yen to $", usa, "U.S. dollars.");
console.log();
console.log("Europe: $", europe, "European euros to $", usa, "U.S. dollars.");
console.log();
console.log("Australia: $", australia, "Australia euros to $", usa, "U.S. dollars.");
console.log();
console.log("Brazil: $", brazil, "Brazilian real to $", usa, "U.S. dollars.");
console.log();
console.log("Pakistan: $", pakistan, "Pakistani rupee to $", usa, "U.S. dollars.");
