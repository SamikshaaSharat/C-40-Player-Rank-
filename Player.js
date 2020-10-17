class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      //introduce the rank
      this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
//function to reffer and read the player rank 
    getCarsAtEnd(){
      database.ref('CarsAtEnd').on("value",(data)=>{
        this.rank = data.val();
})
 }
//static: We don't want it to stick on to one object 
//function to update the player rank
// '/' -main database .
 static updateCarsAtEnd(rank){
   database.ref('/').update({
     CarsAtEnd:rank
   })
 }
  }

