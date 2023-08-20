import * as THREE from 'three'

export default class Model
{
  constructor(_scene, _resources)
  {
    this.scene = _scene
    this.model = _resources.model.scene

    console.log(_resources.model)

    this.setMaterials()
    this.changeMaterials()
    this.setScene()
  }

  setMaterials()
  {
    this.materials = {
      glass : new THREE.MeshPhysicalMaterial({
        metalness: 1,
        roughness: 0,
        transparent: true,
        opacity: 0.5,
        envMapIntensity: 1,
        side: THREE.FrontSide,
        color: 0x000000
      }),
      floor : new THREE.MeshStandardMaterial({
        color: 0xbcbcbc,
        roughness: 0.1,
        metalness: 0
      })
    }
  }

  changeMaterials()
  {

  }

  setScene()
  {
    this.scene.add(this.model)
  }

  resize()
  {

  }

  update()
  {

  }
}
