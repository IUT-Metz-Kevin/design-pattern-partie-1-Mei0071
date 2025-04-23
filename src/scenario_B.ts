//Composite 
interface Entreprise{
    afficher(affichage:string):void;
}

class Departement implements Entreprise{
    private _name:string;
    private _sousDep:Departement;
    private _employes:Employes[];

    constructor(name:string){
        this._name=name;
        this._sousDep=[];
        this._employes=[];
    }

    afficher(affichage: string): void {
        console.log("Departement : "+this._name);
       
    }

    addEmployes(employes: Employes): void {
        this._employes.push(employes);
    }
}

 class Employes implements Entreprise{

 }