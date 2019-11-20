var a = document.getElementById("game1") 
var b = document.getElementById("game2") 
var c = document.getElementById("game3") 
var d = document.getElementById("game4")
var e = document.getElementById("game5") 
var f = document.getElementById("game6") 
var g = document.getElementById("game7") 
var h = document.getElementById("game8") 
var i = document.getElementById("game9") 
var j = document.getElementById("Character") 

function resetAll(elem){ 
    a.classList.remove("dissapear"); 
	b.classList.remove("poof"); 
    c.classList.remove("poof");
	d.classList.remove("poof");
    e.classList.remove("poof"); 
	f.classList.remove("poof");
	g.classList.remove("poof"); 
    h.classList.remove("poof");
}

function disappear(elem){ 
    a.src = "images/Mask.gif" 
    j.src = "images/Link.png";
} 
  

function disappear2(elem){ 
    b.src = "images/Orange_fury.gif";
    j.src = "images/CB.png"; 
} 

function disappear3(elem){ 
    c.src = "images/64.gif";
    j.src = "images/Mario.jpg"; 
} 
  
function disappear4(elem){ 
    d.src = "images/Fighter.gif";
    j.src = "images/Ryu.png"; 
} 
  
function disappear5(elem){ 
    e.src = "images/Pink.gif";
    j.src = "images/Kirby.jpg"; 
} 
  
function disappear6(elem){ 
    f.src = "images/Blue.gif"
    j.src = "images/Sonic.png"; 
} 
  
function disappear7(elem){ 
    g.src = "images/Battlefront_2.gif";
    j.src = "images/Clone.png"; 
} 

function disappear8(elem){ 
    h.src = "images/Trilogy.gif";
    j.src = "images/Scorpion.png"; 
} 
  
  function disappear9(elem){ 
    i.src = "images/Staff_Destruction.gif";
    j.src = "images/Cole.png"; 
} 
  
   