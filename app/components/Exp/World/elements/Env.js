import * as THREE from 'three'

export default class Env
{
  constructor(_scene)
  {
    this.scene = _scene

    this.setConfig()
    this.setLights()
    //this.setScene()
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
      shadows: true,
      exposure: 0.68,
      bulbPower: Object.keys( this.bulbLuminousPowers )[ 4 ],
      hemiIrradiance: Object.keys( this.hemiLuminousIrradiances )[ 9 ]
    }
  }

  setLights()
  {
    const bulbGeometry = new THREE.SphereGeometry( 0.02, 16, 8 )
		this.bulbLight = new THREE.PointLight( 0xffee88, 1, 100, 2 )

    this.bulbMat = new THREE.MeshStandardMaterial({
      emissive: 0xffffee,
      emissiveIntensity: 1,
      color: 0x000000
    })

    this.bulbLight.add( new THREE.Mesh( bulbGeometry, this.bulbMat ))
    this.bulbLight.position.set( 0, 2, 0 )
    this.bulbLight.castShadow = true
    this.scene.add( this.bulbLight )

    this.hemiLight = new THREE.HemisphereLight( this.params.day, this.params.ground, 0.02 )
    this.scene.add( this.hemiLight )

    this.bulbLight.power = this.bulbLuminousPowers[ this.params.bulbPower ]
    this.bulbMat.emissiveIntensity = this.bulbLight.intensity / Math.pow( 0.02, 2.0 )

    this.hemiLight.intensity = this.hemiLuminousIrradiances[ this.params.hemiIrradiance ]
  }

  setScene()
  {
    this.scene.add(this.light)
  }

  resize()
  {

  }

  update()
  {
    this.bulbLight.castShadow = this.params.shadows

    /* if(this.params.shadows !== previousShadowMap)
    {

      ballMat.needsUpdate = true;
      cubeMat.needsUpdate = true;
      floorMat.needsUpdate = true;
      previousShadowMap = params.shadows;

    } */
  }
}
