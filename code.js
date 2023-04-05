var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["248f3d0f-2027-431f-84c6-68e4838af47d","db6f7c96-cfd1-40be-bdaa-8adf46599d4b","13ab8869-d02e-4221-9615-a98754496dc1","cb4cdecc-6ea4-4bae-be8a-7de2721477a6","10821199-7e44-45fe-a51f-040eefaeb0eb","d31cfe97-04a2-4366-8635-486c3a5557a3","e509e81a-0da2-48a0-993c-d6b4e1f42e35"],"propsByKey":{"248f3d0f-2027-431f-84c6-68e4838af47d":{"name":"retrocreature_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"},"db6f7c96-cfd1-40be-bdaa-8adf46599d4b":{"name":"retrocreature_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png"},"13ab8869-d02e-4221-9615-a98754496dc1":{"name":"retrocreature_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MIDDbtmLGF1AkZ8SUVEHFlfHbObHknid/category_retro/retrocreature_04.png"},"cb4cdecc-6ea4-4bae-be8a-7de2721477a6":{"name":"retrocreature_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"10821199-7e44-45fe-a51f-040eefaeb0eb":{"name":"spacebattle_06_1","sourceUrl":null,"frameSize":{"x":346,"y":294},"frameCount":1,"looping":true,"frameDelay":12,"version":"AM4cXxkC3f..1eBjVYhOBEir5tUpvErj","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":294},"rootRelativePath":"assets/10821199-7e44-45fe-a51f-040eefaeb0eb.png"},"d31cfe97-04a2-4366-8635-486c3a5557a3":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"e509e81a-0da2-48a0-993c-d6b4e1f42e35":{"name":"corazon","sourceUrl":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TYdIIrFBMhvSaF09aD9YcAVj4Q1KENbF/category_retro/retro_powerup_heart.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var animacion = createSprite(200,200,400,400)
animacion.setAnimation("santa_1")
var mons1, mons2, mons3, mons4;
var nave;


  
nave = createSprite(200,390,13,13);
nave.shapeColor = "green";
 nave.scale=0.15
 nave.setAnimation("spacebattle_06_1")
  
  
mons1 = createSprite(50,300,10,10);
mons1.shapeColor = "red";
mons1.setAnimation("retrocreature_18_1")
mons1.scale=0.10

mons2 = createSprite(350,230,10,10);
mons2.shapeColor = "red";
mons2.scale=0.10
mons2.setAnimation("retrocreature_14_1")

mons3 = createSprite(50,150,10,10);
mons3.shapeColor = "red";
mons3.scale=0.10
mons3.setAnimation("retrocreature_04_1")

mons4 = createSprite(350,90,10,10);
mons4.shapeColor = "red";
mons4.scale=0.10
 mons4.setAnimation("retrocreature_03_1") 
var vida = createSprite(200, 25,10,10);
  vida.scale=0.10
  vida.setAnimation("corazon")
//Agrega velocidad para hacer que el auto se mueva.
 
  mons1.velocityX = 8;
mons2.velocityX = -8;
mons3.velocityX = 8
mons4.velocityX = -8
  gameState="play";
  textSize(17);
    
  
  

  
  
   


function draw() {
  background("white");
  strokeWeight(0);

createEdgeSprites()  
//Crear un efecto de rebote de los carros contra los límites.
nave.bounceOff(edges)
mons1.bounceOff(edges)
mons2.bounceOff(edges)
mons3.bounceOff(edges)
mons4.bounceOff(edges)










//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.

 
  if(keyDown(UP_ARROW)){
  nave.y=nave.y-3
}

if(keyDown(DOWN_ARROW)){
  nave.y=nave.y+3
}

if(keyDown(LEFT_ARROW)){
  nave.x=nave.x-3
}

if(keyDown(RIGHT_ARROW)){
  nave.x=nave.x+3
}
if (nave.isTouching(mons1)) {
playSound("assets/category_hits/vibrant_crate_break_2.mp3", false);

    
}

if (nave.isTouching(mons2)) {
playSound("assets/category_hits/vibrant_crate_break_2.mp3", false);
    
}

if (nave.isTouching(mons3)) {
playSound("assets/category_hits/vibrant_crate_break_2.mp3", false);
    
}
if (nave.isTouching(mons4)) {
playSound("assets/category_hits/vibrant_crate_break_2.mp3", false);
    
}
if (nave.isTouching(vida)) {
playSound("assets/category_hits/vibrant_game_big_game_horn_hit.mp3", false);
    
}


//Agregar la condición para regresar a Sam a su posición original si toca un 




if (nave.isTouching(mons1)||
nave.isTouching(mons2)||
nave.isTouching(mons3)||
nave.isTouching(mons4)||
nave.isTouching(vida)
) {
 nave.y=350
 nave.x=200

  
}






 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
