class USA{// function to get US dollar. All other countries are compared to the US dollar.
    public constructor(private usdollar: number){}

    public getUSdollar(): number{
        return this.usdollar;
    }
}
class Chile{//class to get chilean pesos to US dollar
    public constructor(private cpeso:number){}
    
    public getCpeso(): number{
        return this.cpeso;
    }
}

class Mexico{//class to get mexican peso to US dollar
    public constructor(private mpeso:number){}
    
    public getMpeso(): number{
        return this.mpeso;
    }
}

class Japan{//class to get japanese yen to US dollar
    public constructor(private yen:number){}
    
    public getYen(): number{
        return this.yen;
    }
}

class Europe{//class to get euro to US dollar
    public constructor(private euro:number){}
    
    public getEuro(): number{
        return this.euro;
    }
}

class Australia{//class to get australian dollar to US dollar
    public constructor(private aeuro: number){}

    public getAeuro(): number{
        return this.aeuro;
    }
}

class Brazil{//class to get Brazilian real to US dollar
    public constructor(private real: number){}

    public getReal(): number{
        return this.real;
    }
}

class Pakistan{//class to get Pakistani rupee to US dollar
    public constructor(private rupee: number){}

    public getRupee(): number{
        return this.rupee;
    }
}
//set variables for each country
const usa = new USA(1.00);
const chile = new Chile(929.84);
const mexico = new Chile(18.15);
const japan = new Japan(150.18);
const europe = new Europe(0.95);
const australia = new Australia(1.58);
const brazil = new Brazil(4.99);
const pakistan = new Pakistan(279.59);

//print out conversions to terminal.
console.log("Here are the conversion rates to the US dollar for a few contries.");
console.log()
console.log("Chile: $", chile, "chilean pesos to $" ,usa, "U.S. dollars.");
console.log()
console.log("Mexico: $", mexico, "mexican pesos to $" ,usa, "U.S. dollars.");
console.log()
console.log("Japan: $", japan, "Japanese yen to $" ,usa, "U.S. dollars.");
console.log()
console.log("Europe: $", europe, "European euros to $" ,usa, "U.S. dollars.");
console.log()
console.log("Australia: $", australia, "Australia euros to $" ,usa, "U.S. dollars.");
console.log()
console.log("Brazil: $", brazil, "Brazilian real to $" ,usa, "U.S. dollars.");
console.log()
console.log("Pakistan: $", pakistan, "Pakistani rupee to $" ,usa, "U.S. dollars.");
