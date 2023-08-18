import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Exp from '..'


export default class Camera
{
  constructor()
  {
    this.exp = new Exp()
    this.canvas = this.exp.canvas
    this.sizes = this.exp.sizes
    this.scene = this.exp.scene

    this.setInstance()
    this.setControls()
  }

  setInstance()
  {
    this.instance = new THREE.PerspectiveCamera(
      70,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.instance.position.set(0, 3, 20)
    this.scene.add(this.instance)
  }

  setControls()
  {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }

  resize()
  {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update()
  {
    this.controls.update()
  }
}
