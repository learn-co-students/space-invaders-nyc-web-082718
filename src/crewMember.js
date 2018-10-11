class CrewMember {
  constructor(position, currentShip) {
    this.position = position,
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.currentShip === "Looking for a Rig") {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.currentShip === "Looking for a Rig") {
      return 'had no effect'
    } else if (this.position === "Gunner") {
      this.currentShip.cloaked = false
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.currentShip === "Looking for a Rig") {
      return 'had no effect'
    }
  }

}
