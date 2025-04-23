//Composite 
/*interface Entreprise{
    afficher(affichage:string):void;
}*/

class Departement /*implements Entreprise*/{
    private _name:string;
    private _employes:Employes[];
    private _sousDep:Departement[];

    constructor(name:string){
        this._name=name;
        this._sousDep=[];
        this._employes=[];
    }

    afficher(): void {
        console.log("Departement : "+this._name);
        this._sousDep.forEach((element)=>console.log("   Sous departement : "+element._name+"\n       Employes : "+element.employes.map(employe=>employe.nom).join(", ")+"\n"));
    }

    addDepartement(departement:Departement){
        this._sousDep.push(departement);
    }

    addEmployes(employes: Employes): void {
        this._employes.push(employes);
    }

    get nom():string{
        return this._name;
    }
    get sousDep():Departement[]{
        return this._sousDep;
    }
    get employes():Employes[]{
        return this._employes;
    }
}

 class Employes /*implements Entreprise*/{
    private _nom:string;

    constructor(name:string){
        this._nom=name;
    }

    get nom():string{
        return this._nom;
    }

    /*afficher(affichage: string): void {
        
    }*/
 }

 function main():void{
    let emp1=new Employes("jean");
    let emp2=new Employes("pierre");
    let emp3=new Employes("jeanne");

    let depTechnique=new Departement("departement technique");
    let sdt1=new Departement("IT");
    let sdt2=new Departement("Web");

    sdt2.addEmployes(emp1);
    sdt1.addEmployes(emp2);
    sdt1.addEmployes(emp3);

    depTechnique.addDepartement(sdt1);
    depTechnique.addDepartement(sdt2);


    let emp4=new Employes("girafe");
    let emp5=new Employes("gir");

    let depCommerciale=new Departement("Departement Commerciale");
    let sdc1=new Departement("Ventes");
    let sdc2=new Departement("Achat");

    sdc1.addEmployes(emp4);
    sdc2.addEmployes(emp5);

    depCommerciale.addDepartement(sdc1);
    depCommerciale.addDepartement(sdc2);

    let emp6=new Employes("glen");
    let emp7=new Employes("chat");
    let emp8=new Employes("chien");

    let depFinancier=new Departement("Departement Finance");
    let sdf1=new Departement("RH");
    let sdf2=new Departement("Comptabilite");
    let sdf3=new Departement("Administration");

    sdf1.addEmployes(emp6);
    sdf2.addEmployes(emp7);
    sdf3.addEmployes(emp8);

    depFinancier.addDepartement(sdf1);
    depFinancier.addDepartement(sdf2);
    depFinancier.addDepartement(sdf3);


    depTechnique.afficher();
    depCommerciale.afficher();
    depFinancier.afficher();

 }

 main();