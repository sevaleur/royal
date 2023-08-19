import Exp from '..'

import Model from './elements/Model'
import Env from './elements/Env'

export default class World
{
  constructor()
  {
    this.exp = new Exp()
    this.scene = this.exp.scene
    this.resources = this.exp.resources.items
    this.model = new Model(this.scene, this.resources)
    this.env = new Env(this.scene)
  }

  resize()
  {

  }

  update()
  {
    if(this.env && this.env.update)
      this.env.update()

    if(this.model && this.model.update)
      this.model.update()
  }
}
