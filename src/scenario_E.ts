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

class EnsemblePerso{
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

function main():void {
    let guerrier=EnsemblePerso.createPersonnages("Guerrier");
    let magicien=EnsemblePerso.createPersonnages("Magicien");
    let archer=EnsemblePerso.createPersonnages("Archer");

    guerrier.attaque();
    magicien.attaque();
    archer.attaque();
}

main();