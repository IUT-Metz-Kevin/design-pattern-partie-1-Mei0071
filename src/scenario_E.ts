//fabrique 

interface Personnage{
    attaque():void;
}

class Guerrier implements Personnage{
    attaque(): void {
        console.log("Coup épée");
    }
}
class Magicien implements Personnage{
    attaque(): void {
        console.log("Tornade de glace");
    }
}
class Archer implements Personnage{
    attaque(): void {
        console.log("Pluie de flèches");
    }
}

class Perso{
    public static createPersonnages(typePerso:string):Personnage{
        if(typePerso==="Guerrier"){
            return new Guerrier();
        }else if (typePerso==="Magicien"){
            return new Magicien();
        }else if (typePerso==="Archer"){
            return new Archer();
        }
      throw new Error("Type de personnages inconnu");
    }
}

class EnsemblePerso{
    private _perso: Personnage[] = [];
  
    ajouterUn(type: string): void {
      this._perso.push(Perso.createPersonnages(type));
    }
  
    attaque(): void {
      for (const pers of this._perso) {
        console.log(pers);
        pers.attaque();
      }
    }
}

function main():void {
    const perso=new EnsemblePerso();

    perso.ajouterUn("Guerrier");
    perso.ajouterUn("Magicien");
    perso.ajouterUn("Archer");

   perso.attaque();
}

main();