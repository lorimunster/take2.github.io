$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 650, 150, 20, "yellow");
    createPlatform(300, 550, 150, 20, "yellow");
    createPlatform(550, 475, 75, 20, "yellow");
    createPlatform(700, 375, 100, 50, "yellow");
    createPlatform(950, 450, 100, 20, "yellow");
    createPlatform(875, 325, 75, 20, "yellow");
    createPlatform(1150, 350, 150, 20, "yellow");

    

    // TODO 3 - Create Collectables
    createCollectable("kennedi", 400, 500);
    createCollectable("diamond",650, 400);
    createCollectable("max",1025, 425);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 450, 1500);
    createCannon("bottom", 1100, 1000);
    createCannon("top", 850, 1000);
    createCannon("left",200, 2050);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
