let spaceshipId = 0

class Spaceship {
  constructor(name, crew = [], phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.phasersCharge = 'uncharged'
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (this.crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
      for (let crewMember in crew) {
        crew[crewMember].currentShip = this
      }
    }
    this.id = ++spaceshipId
  }
}
