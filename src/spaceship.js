class Spaceship {
  constructor(name, crew = [], phasers = 5, shields = 4){
    this.name = name
    this.shields = shields
    this.phasers = phasers
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = true
    this.phasersCharge = 'uncharged'
    this.crew = crew
    if(crew.length){
      this.docked = false
      crew.forEach(member => member.joinCrew(this))
    }
  }
}
