import * as THREE from 'three'
import Exp from '..'


export default class Camera
{
  constructor()
  {
    this.exp = new Exp()
    this.sizes = this.exp.sizes
    this.scene = this.exp.scene

    this.setInstance()
  }

  setInstance()
  {
    this.instance = new THREE.PerspectiveCamera(
      70,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )

    this.scene.add(this.instance)
  }

  resize()
  {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update()
  {

  }
}
