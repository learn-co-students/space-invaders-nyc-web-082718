class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
    const role = position
  }
  engageWarpDrive(){
    if(this.position === 'Pilot' && this.currentShip.name){
      this.currentShip.warpDrive = 'engaged'
    }
    else{return 'had no effect'}
  }
  chargePhasers(){
    if(this.position === 'Gunner' && this.currentShip.name){
      this.currentShip.phasers = 'charged'
    }
    else{return 'had no effect'}
  }
  setsInvisibility(){
    if(this.position === 'Defender' && this.currentShip.name){
      this.currentShip.cloaked = true
    }
    else{return 'had no effect'}
  }
  joinCrew(ship){
    this.currentShip = ship
  }
}
