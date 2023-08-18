import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter
{
  constructor(_sources)
  {
    super()

    this.sources = _sources
    this.items = {}

    this.loaded = 0
    this.toLoad = this.sources.length

    this.startLoading()
  }

  startLoading()
  {
    this.textureLoader = new THREE.TextureLoader()
    this.gltfLoader = new GLTFLoader()

    for(const source of this.sources)
    {
      switch(source.type)
      {
        case 'gltf':
          this.gltfLoader.load(
            source.path,
            (file) =>
            {
              this.sourceLoaded(source, file)
            }
          )
          break
        case 'texture':
          this.textureLoader.load(
            source.path,
            (file) =>
            {
              this.sourceLoaded(source, file)
            }
          )
          break
        default:
          break
      }
    }
  }

  sourceLoaded(source, file)
  {
    this.item[source.name] = file

    this.loaded++

    if(this.loaded === this.toLoad)
      this.trigger('loaded')
  }
}

