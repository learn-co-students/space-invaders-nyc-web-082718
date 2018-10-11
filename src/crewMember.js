let crewMemberId = 0

class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
    this.id = ++crewMemberId
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged'
    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else if (this.position === 'Defender') {
      this.currentShip.cloaked = true
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
