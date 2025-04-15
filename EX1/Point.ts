class Point {
    private abs : number ;
    private ord : number ;

    constructor(abs : number , ord : number){
        this.abs = abs ;
        this.ord = ord ;
    }

    get Absissce() : number {
        return this.abs;
    }
    
    get Ordonnee() : number {
        return this.ord;
    }

    set ModfAbsissce(abs : number){
        this.abs = abs ;
    }

    set ModfOrdonnee(ord : number){
        this.ord = ord ;
    }

    // calculer la distance entre point qui appel la fct et point passe en argument
   calculerDistance(p: Point) : number{
    return  Math.sqrt(Math.pow((p.abs - this.abs) , 2) + Math.pow((p.ord - this.ord) , 2)) ;
}
}
  // exemple de test 
  const point1 = new Point(1,2);
  const point2 = new Point(3,4);
 console.log("les coordonnes de point1 sont  Abssisce : " +point1.Absissce + " Ordonnee : " +  point1.Ordonnee) ;
 console.log("les coordonnes de point2  Abssisce : " +point2.Absissce + " Ordonnee : " +  point2.Ordonnee) ;
 console.log("la distance entre point1 et point 2 est : "+ point1.calculerDistance(point2));

  
 