let shipId = 0
let store = {crewMembers: [], ships:[]}

class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.id = ++shipId
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.crew.length === 0 ? this.docked = true : this.docked = false
    this.phasersCharge = "uncharged"
    this.becomeAware()
  }

  becomeAware(){
    this.crew.forEach(function(crewMember) {
      crewMember.currentShip = this
    }.bind(this))
  }


}
