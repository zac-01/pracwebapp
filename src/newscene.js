function newscene() 
{
    var gui;
    let s; 

    this.setup = function()
    {
    gui = createGui();
    setupHeaderButtons();   

    // Create SliderV.
    // The last two optional arguments define the min and max (minimum and maximum) values.
    // The default min and max values are 0 and 1, respectively.
    
    s = createSliderV("SliderV", 50, 200, 32, 300, 25, 250);

     gui.loadStyle("TerminalBlue");
 

    }

    this.enter = function()
    {
        gui.show();
    }

    this.exit = function()
    {
        gui.hide();
    }

    this.draw = function()
    {
        background('#aaaaaa');
        

        gui.draw();
        if (s.isChanged) {
            // Print a message when SliderV is changed
            // that displays its value.
            print(s.label + " = " + s.val);
          }
          
          // Use SliderV's value to determine where the ellipse is drawn.
          fill(0, 0, 255);
          ellipse(250, 200, s.val);
        
     

        push();
        showHeader(true);

        textAlign(LEFT);
        fill(0);
        textSize(20);
        text("SliderV",30,80);

        pop();


    }
 
}