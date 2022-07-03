class Bola {
  constructor(){
    this.pos = {x:0, y:0};
    this.size = {w:10, h:10};
    this.direcao = 1;
    this.direcaoVertical = 1; 
    this.deslocamento = 1;
  }
  
  update(){
    this.pos.x += (this.deslocamento * this.direcao);
    this.pos.y += (this.deslocamento * this.direcaoVertical);
  }
  
  show(){
    noStroke();
    fill('yellow');
    rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}