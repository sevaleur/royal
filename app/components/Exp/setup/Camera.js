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
      (-(this.sizes.width / this.sizes.height) * 14) / 2,
      ((this.sizes.width / this.sizes.height) * 14) / 2,
      14 / 2,
      -14 / 2,
      -20,
      1000
    )

    this.instance.position.set(
      0,
      4,
      12
    )

    this.scene.add(this.instance)
  }

  setControls()
  {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
    this.controls.maxPolarAngle = Math.PI / 2

    this.controls.maxZoom = 5.0
    this.controls.minZoom = 0.6

    this.controls.listenToKeyEvents(window)
  }

  resize()
  {
    this.instance.left = (-(this.sizes.width / this.sizes.height) * 14) / 2
    this.instance.right = ((this.sizes.width / this.sizes.height) * 14) / 2
    this.instance.top = 14 / 2
    this.instance.bottom = -14 / 2
    this.instance.updateProjectionMatrix()
  }

  update()
  {
    this.controls.update()
  }
}
