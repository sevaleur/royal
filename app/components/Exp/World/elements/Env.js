import * as THREE from 'three'

export default class Env
{
  constructor(_scene, _position)
  {
    this.scene = _scene

    this.setConfig()
    this.setLights(_position)
    //this.setFog()
  }

  setConfig()
  {
    this.bulbLuminousPowers = {
      '110000 lm (1000W)': 110000,
      '3500 lm (300W)': 3500,
      '1700 lm (100W)': 1700,
      '800 lm (60W)': 800,
      '400 lm (40W)': 400,
      '180 lm (25W)': 180,
      '20 lm (4W)': 20,
      'Off': 0
    }

    this.hemiLuminousIrradiances = {
      '0.0001 lx (Moonless Night)': 0.0001,
      '0.002 lx (Night Airglow)': 0.002,
      '0.5 lx (Full Moon)': 0.5,
      '3.4 lx (City Twilight)': 3.4,
      '50 lx (Living Room)': 50,
      '100 lx (Very Overcast)': 100,
      '350 lx (Office Room)': 350,
      '400 lx (Sunrise/Sunset)': 400,
      '1000 lx (Overcast)': 1000,
      '18000 lx (Daylight)': 18000,
      '50000 lx (Direct Sun)': 50000
    }

    this.params = {
      day: 0x2773b2,
      night: 0x00102a,
      ground: 0xf3f3f3,
      fog: 0xd6d2ca,
      shadows: true,
      exposure: 0.68,
      bulbPower: Object.keys( this.bulbLuminousPowers )[ 5 ],
      hemiIrradiance: Object.keys( this.hemiLuminousIrradiances )[ 1 ]
    }
  }

  setLights(_position)
  {
    /*
      AREA LIGHTS
    */

    /* const bulbGeometry = new THREE.SphereGeometry( 0.02, 16, 8 )
		this.bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 )

    this.bulbMat = new THREE.MeshStandardMaterial({
      emissive: 0xffffee,
      emissiveIntensity: 1,
      color: 0x000000
    })

    this.bulbLight.add( new THREE.Mesh( bulbGeometry, this.bulbMat ))
    this.bulbLight.position.set( 0, 2, 0 )
    this.bulbLight.castShadow = true

    this.bulbLight.power = this.bulbLuminousPowers[ this.params.bulbPower ]
    this.bulbMat.emissiveIntensity = this.bulbLight.intensity / Math.pow( 0.02, 2.0 )

    this.scene.add( this.bulbLight ) */

    /*
      HEMISPHERE LIGHT
    */

    /* this.hemiLight = new THREE.HemisphereLight( this.params.night, this.params.ground, 0.02 )
    this.hemiLight.scale.set(100, 100, 100)
    this.scene.add( this.hemiLight )

    this.hemiLight.intensity = this.hemiLuminousIrradiances[ this.params.hemiIrradiance ] */

    /*
      DIRECTIONAL LIGHT // SUN
    */

    this.directLight = new THREE.DirectionalLight(0xFFD0BF, 10)

    this.directLight.position.copy(_position)
    this.directLight.rotation.y = -Math.PI * 0.25

    this.directLight.castShadow = true
    this.directLight.shadow.mapSize.width = 1024
    this.directLight.shadow.mapSize.height = 1024

    this.directLight.shadow.camera.top = 5
    this.directLight.shadow.camera.right = 6
    this.directLight.shadow.camera.bottom = -5
    this.directLight.shadow.camera.left = -6
    this.directLight.shadow.camera.near = 1
    this.directLight.shadow.camera.far = 30

    /* const directionalLightCameraHelper = new THREE.CameraHelper(this.directLight.shadow.camera)
    directionalLightCameraHelper.visible = true
    this.scene.add(directionalLightCameraHelper) */

    this.scene.add(this.directLight)
  }

  setFog()
  {
    //this.scene.fog = new THREE.Fog(this.params.fog, 5, 150)
  }

  resize()
  {

  }

  update()
  {
    /* this.bulbLight.castShadow = this.params.shadows */

    /* if(this.params.shadows !== previousShadowMap)
    {

      ballMat.needsUpdate = true;
      cubeMat.needsUpdate = true;
      floorMat.needsUpdate = true;
      previousShadowMap = params.shadows;

    } */
  }
}
