//Adatateur 

interface ControlerActions {
    sauter():void;
    attaquer():void;
    interagir():void;
}

class Clavier{
    espace():void{
        console.log("espace : sauter");
    }
    clicGauche():void{
        console.log("clic gauche : attaquer");
    }
    clicDroit():void{
        console.log("clic droit : interagir");
    }
}

class ClavierAdaptateur implements ControlerActions{
    private _clavier:Clavier;

    constructor(clavier:Clavier){
        this._clavier=clavier;
    }

    sauter(): void {
        this._clavier.espace();
    }

    attaquer(): void {
        this._clavier.clicGauche();
    }

    interagir(): void {
        this._clavier.clicDroit();
    }
}

class ManetteXbox{
    boutonA():void{
        console.log("Bouton A : sauter");
    }

    boutonB():void{
        console.log("Bouton B : attaquer");
    }

    boutonX():void{
        console.log("Bouton X : interagir");
    }
}

class ManetteXboxAdaptateur implements ControlerActions{
    private _manetteXbox:ManetteXbox;

    constructor(manetteXbox:ManetteXbox){
        this._manetteXbox=manetteXbox;
    }

    sauter(): void {
        this._manetteXbox.boutonA();
    }

    attaquer(): void {
        this._manetteXbox.boutonB();
    }

    interagir(): void {
        this._manetteXbox.boutonX();
    }
}

class ManettePs5{
    boutonX():void{
        console.log("Bouton X : sauter");
    }

    boutonO():void{
        console.log("Bouton O : attaquer");
    }

    boutonTriangle():void{
        console.log("Bouton triangle : interagir");
    }
}

class ManettePs5Adaptateur implements ControlerActions{
    private _manettePs5:ManettePs5;

    constructor(manettePs5:ManettePs5){
        this._manettePs5=manettePs5;
    }

    sauter(): void {
        this._manettePs5.boutonX();
    }

    attaquer(): void {
        this._manettePs5.boutonO();
    }

    interagir(): void {
        this._manettePs5.boutonTriangle();
    }
}

function main():void{
    console.log("Clavier : ")
    let clavier=new Clavier();
    let clavierAdapt=new ClavierAdaptateur(clavier);
    clavierAdapt.attaquer();
    clavierAdapt.sauter();
    clavierAdapt.interagir();

    console.log("Manette Xbox : ")
    let xbox=new ManetteXbox();
    let xboxAdapt=new ManetteXboxAdaptateur(xbox);
    xboxAdapt.attaquer();
    xboxAdapt.sauter();
    xboxAdapt.interagir();

    console.log("Manette Ps5 : ")
    let ps5=new ManettePs5();
    let ps5Adapt=new ManettePs5Adaptateur(ps5);
    ps5Adapt.attaquer();
    ps5Adapt.sauter();
    ps5Adapt.interagir();

}

main();