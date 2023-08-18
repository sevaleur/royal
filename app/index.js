import Exp from 'components/Exp'

export default class App
{
  constructor()
  {

    this.createContent()
    this.createCanvas()
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
}

new App()
