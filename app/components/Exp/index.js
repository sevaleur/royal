import * as THREE from 'three'

import Sizes from './utils/Sizes.js'
import Time from './utils/Time.js'
import Resources from './utils/Resources.js'

import _sources from './data/sources.js'

import Camera from './setup/Camera.js'
import Renderer from './setup/Renderer.js'

import World from './World'

export default class Exp
{
  static instance

  constructor(template, _canvas)
  {
    if(Exp.instance)
      return Exp.instance

    Exp.instance = this

    this.canvas = _canvas
    this.sizes = new Sizes()
    this.time = new Time()
    this.resources = new Resources(_sources)
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    this.loaded = false

    this.handleEvents()
  }

  /*
    EVENTS.
  */

  handleEvents()
  {
    this.resources.on('loaded', () =>
    {
      this.world = new World()

      this.loaded = true
    })

    this.sizes.on('resize', () =>
    {
      this.resize()
    })

    this.time.on('update', () =>
    {
      this.update()
    })
  }

  resize()
  {
    this.camera.resize()
    this.renderer.resize()
  }

  update()
  {
    if(this.world && this.world.update)
      this.world.update()

    this.camera.update()
    this.renderer.update()
  }
}
