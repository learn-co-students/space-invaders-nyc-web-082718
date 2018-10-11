class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Pilot') {
      return 'had no effect'
    }
    this.currentShip.warpDrive = 'engaged'
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender') {
      return 'had no effect'
    }
    this.currentShip.cloaked = true
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Gunner') {
      return 'had no effect'
    }
    this.currentShip.phasersCharge = 'charged'
  }
}
