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
    this.instance = new THREE.OrthographicCamera(
      (-(this.sizes.width / this.sizes.height) * 12) / 2,
      ((this.sizes.width / this.sizes.height) * 12) / 2,
      12 / 2,
      -12 / 2,
      -20,
      1000
    )

    this.instance.position.set(
      0,
      2,
      4
    )

    this.scene.add(this.instance)
  }

  setControls()
  {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
    this.controls.maxPolarAngle = Math.PI / 2

    this.controls.listenToKeyEvents(window)
  }

  resize()
  {
    this.instance.left = (-(this.sizes.width / this.sizes.height) * 12) / 2
    this.instance.right = ((this.sizes.width / this.sizes.height) * 12) / 2
    this.instance.top = 12 / 2
    this.instance.bottom = - 12 / 2
    this.instance.updateProjectionMatrix()
  }

  update()
  {
    this.controls.update()
  }
}
