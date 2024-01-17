// 2 Classes Developer and Website - Need Constructor Function, Attributes, and Methods


class Developer {
    constructor(name, workingFingers, eyes, email){
      this.name = name
      this.workingFingers = workingFingers
      this.eyes = eyes
      this.tools = []
      this.email = email
      this.projects = []
      this.willToLive = true
      this.skills = []
    }

    learnedSkill(skill) {
      this.skills.push(skill)
      console.log(this.name, 'learned', skill)
      return skill
    }
    addedTool(tool) {
      this.tools.push(tool)
      console.log(this.name, 'added', tool, 'to their tool box')
      return tool
    }
    usedTool(tool) {
      console.log(this.name, 'used their', this.tools.tool, 'wisely')
    }
    createProject(buttons, links, projectName, content, cssType) {
      if(this.name.workingFingers === false) {
        console.log(this.name, 'has no working digits and thus can not create', projectName)
      }
      if(this.name.willToLive === false) {
        console.log(this.name, 'has lost all will to live and thus no longer lives in this realm and must create', projectName, 'somewhere else')
      } else {
        var proj = new Website(buttons, links, projectName, content, cssType)
        this.projects.push(proj)
        console.log(this.name, 'just created', proj.projectName)
      }
      return proj
    }
    theyBrokeIt(other, proj) {
      console.log(other.name, 'Broke', this.name+"'s", proj)
      return this
    }
    retaliate(other, another, proj) {
      other.workingFingers = false
      console.log('In retaliation', this.name, 'broke', other.name+"'s fingers and hired", another.name, 'to fix', proj)
    }
    battle(other) {
      other.workingFingers = true
      other.eyes = false
      this.workingFingers = false
      this.willToLive = false
      console.log(this.name, 'feeling sorry for', other.name, 'attempted to heal', other.name, 'however in the process gained damage')
      return this
    }
    fix(proj) {
      if(this.name.workingFingers == true && this.name.willToLive == true) {
        console.log(this.name, 'has chosen to fix', proj)
      } else {
        console.log(this.name, 'is no longer in this realm or able to fix anything')
      }
    }
  }
  
  
  class Website {
    constructor(buttons, links, projectName, content, cssType){
      this.buttons = buttons
      this.links = links
      this.projectName = projectName
      this.content = content
      this.cssType = cssType
    }
    brokenProject() {
      console.log(this.projectName, '404')
    }
  }
  
  
  // Developer Instances
let corey = new Developer('Corey', true, true, 'corey@corey.com')
let keith = new Developer('Keith', true, true, 'keith@keith.com')
let lydia = new Developer('Lydia', true, true, 'lydia@lydia.com')
let delvon = new Developer('Delvon', true, true, 'delvon@delvon.com')
let eric = new Developer('Eric', true, true, 'eric@eric.com')
let jesse = new Developer('Jesse', true, true, 'jesse@jesse.com')
let melissa = new Developer('Melissa', true, true, 'melissa@melissa.com')
  
  
  // Website instances
  
  
  
  // Interacting with the created instances
eric.createProject(true, true, 'Cardboard Castle', true, 'Vanilla CSS')
eric.theyBrokeIt(keith, eric.projects[0].projectName).retaliate(keith, lydia, eric.projects[0].projectName)
keith.createProject(true, true, 'The Best Website Ever', true, 'Tailwind')
delvon.battle(keith).createProject(true, false, 'New and Improved Cardboard Castle', true, 'Vanilla CSS')