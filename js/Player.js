class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.distanceX =0;
    this.rank = 0;
    this.score = 0;
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

  getxPos(){
    var playerCountRef = database.ref('xPos');
    playerCountRef.on("value",(data)=>{
      xPos = data.val();
    })
  }

  updatexPos(Pos){
    database.ref('/').update({
      xPos: Pos
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      distanceX:this.distanceX,
      score : this.score,
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getRank(){
     database.ref("rank").on("value",(data)=>{
       this.rank=data.val();
     })
  }

  static updateRank(rank){
    database.ref("/").update({
      rank:rank
    })
  }
}
