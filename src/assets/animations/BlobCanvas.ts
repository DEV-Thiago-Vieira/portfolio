const TWO_PI = Math.PI * 2

class Blob {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  hue: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.radius = 60 + Math.random() * 40
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.hue = 30 + Math.random() * 20
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1
  }

  render(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
    gradient.addColorStop(0, `hsla(${this.hue}, 90%, 60%, 0.8)`)
    gradient.addColorStop(1, `hsla(${this.hue}, 90%, 60%, 0)`)
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI)
    ctx.fill()
  }
}

export class BlobCanvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  blobs: Blob[]
  animationFrameId: number | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')!
    this.width = this.canvas.width = window.innerWidth
    this.height = this.canvas.height = window.innerHeight
    this.blobs = []
    this.initBlobs()
    window.addEventListener('resize', this.handleResize)
  }

  initBlobs() {
    const count = 10
    this.blobs = []
    for (let i = 0; i < count; i++) {
      this.blobs.push(new Blob(this.width, this.height))
    }
  }

  handleResize = () => {
    this.width = this.canvas.width = window.innerWidth
    this.height = this.canvas.height = window.innerHeight
    this.initBlobs()
  }

  update() {
    this.blobs.forEach((blob) => blob.update(this.width, this.height))
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.save()
    this.ctx.globalAlpha = 0.5
    for (const blob of this.blobs) {
      blob.render(this.ctx)
    }
    this.ctx.restore()
  }

  loop = () => {
    this.update()
    this.render()
    this.animationFrameId = requestAnimationFrame(this.loop)
  }

  start() {
    this.loop()
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }
    window.removeEventListener('resize', this.handleResize)
  }
}
