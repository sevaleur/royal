import * as THREE from 'three'
import Exp from '..'

export default class World
{
  constructor()
  {
    this.exp = new Exp()
    this.scene = this.exp.scene
    this.model = this.exp.resources.items.royal.scene

    this.light = new THREE.DirectionalLight(0xFFFFFF, 10)
    this.scene.add(this.model, this.light)
  }
}
