import * as THREE from 'three'

export default class Model
{
  constructor(_scene, _resources)
  {
    this.scene = _scene
    this.model = _resources.model.scene
    this.position = new THREE.Vector3()

    console.log(_resources.model)

    this.setMaterials()
    this.setModel()
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

  setModel()
  {
    for(const child of this.model.children)
    {
      if(child instanceof THREE.Mesh)
      {
        child.castShadow = true
        child.receiveShadow = true

        if(child.name === 'ground')
        {
          child.castShadow = false
          child.receiveShadow = true
        }
      }

      if(child.name === 'Sun')
      {
        this.position.copy(child.position)
      }
    }

    this.model.children[0].children[0].children[0].children[1].children[0].castShadow = true
    this.model.children[0].children[0].children[0].children[1].children[0].receiveShadow = true

    this.model.scale.set(
      0.5,
      0.5,
      0.5
    )

    this.scene.add(this.model)
  }

  resize()
  {

  }

  update()
  {

  }
}
