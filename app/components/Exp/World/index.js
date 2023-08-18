import * as THREE from 'three'
import Exp from '..'

export default class World
{
  constructor()
  {
    this.exp = new Exp()
    this.scene = this.exp.scene
    this.models = this.exp.resources.items

    this.light = new THREE.AmbientLight(0xFFFFFF, 0.5)
    this.scene.add(this.models.royal, this.light)
  }
}
