
const frame = new Frame("fit", 750, 750, "#132a30", "#31525c");
frame.on("ready", ()=>{ // ES6 Arrow Function - similar to function(){}
    // often need below - so consider it part of the template
    let stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;
    let t=0;
    const grav = new Physics(0, new Boundary(51, 51, stageW-100, stageH-100), true);
    const borbs = new Container(stageW,stageH).addTo();
    
    let x,y;
    
  loop(300, function(i) { 
    x=rand(51,stageW-51);
     y=rand(51,stageH-51);
    let circle = new Circle(1,white)
     .loc(x,y, borbs)
     //.addPhysics({restitution:1})
     .addPhysics({density:50});  
  });
  
  loop(30, function(i) { 
    x=rand(51,stageW-51);
     y=rand(51,stageH-51);
    let circle2 = new Circle(50,"#4d7d8a")
     .loc(x,y, borbs)
    .drag()
     //.addPhysics({restitution:1})
     .addPhysics({density:1000});  
  });
  //Ticker.setFPS(20)
  Ticker.add(function(){
  
    t=t+0.1
			borbs.loop(circle=>{
        
				circle.force((stageW/2-circle.x)+300*Math.cos(t)*Math.sin(t)+100*Math.cos(t/3), (stageH/2-circle.y)-300*Math.sin(t/2)*Math.cos(t)-100*Math.cos(t/4));
        

}, stage); 
  
 
		});
	  
		grav.drag(); // turn dragging on in the physics world
  stage.update();
});