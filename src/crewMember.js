// let crewMemberId = 0
// let store = {crewMembers:[], ships:[]}

class CrewMember {

  constructor(position){
    // this.id = ++crewMemberId
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  }

}
