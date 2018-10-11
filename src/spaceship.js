let spaceShipId = 0
class Spaceship {

  constructor(name, crew = [], phasers, shields) {
    this.name = name
    this.crew = crew
    if (this.crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
      for (let crewMemberIndex in crew) {
        crew[crewMemberIndex].currentShip = this
      }
    }
    this.phasers = phasers
    this.shields = shields
    this.id = ++spaceShipId
    this.cloaked = false
    this.warpDrive='disengaged'
    this.phasersCharge='uncharged'
  }



}
