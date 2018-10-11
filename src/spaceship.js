class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.cloaked = false
    if (this.crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }

    this.crew.forEach((person) => {
      person.currentShip = this
    })
  }

}
