//Composite 
interface entreprise{
    afficher(indentation : string):void;
}

class Departement implements entreprise{
   private _dep:entreprise[];
   private _nom:string;

   constructor(nom:string){
    this._dep=[];
    this._nom=nom;
   }

   ajouter(composant:entreprise):void{
    this._dep.push(composant);
   }

   afficher(indentation: string): void {
       console.log(`Département : ${this._nom}`);
       for(let sousDep of this._dep){
        sousDep.afficher(indentation+ " ");
       }
   }
}

 class Employes implements entreprise{
    private _nom:string;

    constructor(name:string){
        this._nom=name;
    }

    afficher(indentation: string): void {
        console.log(`Employés : ${this._nom}`);
    }

 }

 function main():void{
    let DG=new Departement("Diréction générale");
    let SG=new Departement("Secrétariat général");
    let DT=new Departement("Département technique");
    let DC=new Departement("Département commercial");
    let DF=new Departement("Département financier");

    let IT=new Departement("IT");
    let Web=new Departement("Web");
    let Ventes=new Departement("Ventes");
    let Achats=new Departement("Achats");
    let RH=new Departement("RH");
    let Compta=new Departement("Compta");
    let Admin=new Departement("Admin");
    
    let E1=new Employes("Jacques");
    let E2=new Employes("Jacques");
    let E3=new Employes("Jacques");
    let E4=new Employes("Jacques");
    let E5=new Employes("Jacques");
    let E6=new Employes("Jacques");
    let E7=new Employes("Jacques");
    let E8=new Employes("Jacques");
    let E9=new Employes("Jacques");
    let E10=new Employes("Jacques");

    IT.ajouter(E1);
    IT.ajouter(E2);
    Web.ajouter(E3);
    Ventes.ajouter(E4);
    Ventes.ajouter(E5);
    Achats.ajouter(E6);
    RH.ajouter(E7);
    Compta.ajouter(E8);
    Admin.ajouter(E9);
    Admin.ajouter(E10);

    DT.ajouter(IT);
    DT.ajouter(Web);
    DC.ajouter(Ventes);
    DC.ajouter(Achats);
    DF.ajouter(Compta);
    DF.ajouter(RH);
    DF.ajouter(Admin);

    DG.ajouter(SG);
    DG.ajouter(DC);
    DG.ajouter(DF);
    DG.ajouter(DT);

    DG.afficher("Organigramme de l'entreprise");
 }

 main();