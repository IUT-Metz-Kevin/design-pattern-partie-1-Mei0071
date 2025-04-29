//Décorateur 
interface Boisson{
    description():void;
    tarif():number;
}

class Cafe implements Boisson{
    description(): string {
        return "café";
    }

    tarif(): number {
        return 4;
    }
}

abstract class CafeDecorateur implements Boisson{
    protected boisson:Boisson;

    constructor(boisson:Boisson){
        this.boisson=boisson;
    }

    abstract description(): void;

    abstract tarif(): number
}

class Lait extends CafeDecorateur{
    description(): string {
        return this.boisson.description()+", Lait";
    }

    tarif(): number {
        return this.boisson.tarif()+1;
    }
}

class Chantilly extends CafeDecorateur{
    description(): string {
        return this.boisson.description()+", Chantilly";
    }

    tarif(): number {
        return this.boisson.tarif()+1;
    }
}

class Vanille extends CafeDecorateur{
    description(): string {
        return this.boisson.description()+", Vanille";
    }

    tarif(): number {
        return this.boisson.tarif()+0.5;
    }
}

