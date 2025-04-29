//Singleton 
class Jeu {
    private static instance:Jeu;

    difficulte!:string;
    langue!:string;
    volMus!:number;
    VolEffSo!:number;
    resoEcr!:string;
    qualGrap!:string;

    constructor(){
        this.difficulte=this.diff;
        this.langue=this.lang;
        this.volMus=this.mus;
        this.VolEffSo=this.eff;
        this.resoEcr=this.res;
        this.qualGrap=this.qual;
    }

    set diff(diif:string){
        this.difficulte=diif;
    }
    set lang(lang:string){
        this.langue=lang;
    } 
    set mus(mus:number){
        this.volMus=mus;
    } 
    set eff(eff:number){
        this.VolEffSo=eff;
    } 
    set res(res:string){
        this.resoEcr=res;
    }
    set qual(qual:string){
        this.qualGrap=qual;
    }

    static getInstance():Jeu{
        if(!Jeu.instance){
            Jeu.instance=new Jeu();
        }
        return Jeu.instance;
    }

}