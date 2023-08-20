import Exp from 'components/Exp'

export default class App
{
  constructor()
  {

    this.createContent()
    this.createCanvas()
    this.createPreloader()
  }

  /*
    CREATE.
  */

  createContent()
  {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
    this.canvas = document.createElement('canvas')
    document.body.appendChild(this.canvas)
  }

  createCanvas()
  {
    this.exp = new Exp(
      this.template,
      this.canvas
    )
  }

  createPreloader()
  {
    if(this.exp && this.exp.loaded)
      console.log('ready')
  }
}

new App()
