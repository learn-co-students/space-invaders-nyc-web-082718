let CrewMemberId = 0
class CrewMember {

    constructor(position) {
      this.position = position
      this.id = ++CrewMemberId
      this.currentShip = 'Looking for a Rig'
      }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      if (this.position === 'Defender'){
        this.currentShip.cloaked = true
      }
    }
  }

  engageWarpDrive() {
   if (this.currentShip === 'Looking for a Rig') {
     return 'had no effect'
   } else if (this.position === 'Pilot') {
     this.currentShip.warpDrive = 'engaged'
   }
 }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged'
    }
  }


}
