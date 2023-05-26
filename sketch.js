let xBolinha = 300; //Variaveis
let yBolinha = 195;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
diametro = 20;
raio = diametro / 2;

let xRaquete1 = 5; //posição raquete
let yRaquete1 = 150;
let xRaquete2 = 585;
let yRaquete2 = 150;

let velocidadeXBolinha = 5;      //velocidade x Bolinha
let velocidadeYBolinha = 5;      //velocidade y Bolinha

let velocidadeYRaquete2;

let pontosJogador = 0;
let pontosMaquina = 0;

//Sons do jogo

let somRaquete;
let somPonto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  somRaquete = loadSound("raquetada.mp3");
  somPonto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400); // cenário
  trilha.loop();
}

function draw() {
  background(0); // cor do cenário
  bolinha();
  raquete1();
  raquete2();
  movimentoBolinha();
  verificaColisaoBorda();
  movimentoRaquete1();
  movimentoRaquete2();
  verificaColisaoRaquete1();
  verificaColisaoRaquete2();
  placar();
  pontos();
}

function bolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1 ;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1 ;
  }
}

function raquete1() {
  rect(xRaquete1, yRaquete1, comprimentoRaquete, alturaRaquete);
}

function raquete2() {
  rect(xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete);
}

function movimentoRaquete1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete1 += 10;
  }
}

function movimentoRaquete2(){
  if (keyIsDown(87)) {
    yRaquete2 -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete2 += 10;
  }
  //velocidadeYRaquete2 = yBolinha + raio - alturaRaquete/2 - 50  ;
  //yRaquete2 = velocidadeYRaquete2
}


function verificaColisaoRaquete1() {
  if (
    xBolinha - raio < xRaquete1 + comprimentoRaquete &&
    yBolinha - raio < yRaquete1 + alturaRaquete &&
    yBolinha + raio > yRaquete1
  ) {
    velocidadeXBolinha *= -1;
    somRaquete.play();
  }
}

function verificaColisaoRaquete2() {
  if (
    xBolinha + raio > xRaquete2  &&
    yBolinha - raio < yRaquete2 + alturaRaquete &&
    yBolinha + raio > yRaquete2
  ) {
    velocidadeXBolinha *= -1;
    somRaquete.play();
  }
}

function placar(){
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text(pontosJogador, 270, 26);
  text(pontosMaquina, 330, 26)
}

function pontos(){
  if (xBolinha > 590){
    pontosJogador += 1;
    somPonto.play();
  }
  if (xBolinha < 10){
    pontosMaquina += 1;
    somPonto.play();
  }
}