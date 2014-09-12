var inst;
function shootchop(ele){
	this.plane = ele;
}

shootchop.prototype.moveup = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.bottom))){
		inc = parseInt(this.plane.style.bottom);
	}
	this.plane.style.bottom = inc + 3+"px";
}
shootchop.prototype.movedown = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.bottom))){
		inc = parseInt(this.plane.style.bottom);
	}
	this.plane.style.bottom = inc - 3+"px";
}
shootchop.prototype.moveright = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.left))){
		inc = parseInt(this.plane.style.left);
	}
	this.plane.style.left = inc + 3+"px";
}
shootchop.prototype.moveleft = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.left))){
		inc = parseInt(this.plane.style.left);
	}
	this.plane.style.left = inc - 3+"px";
}
shootchop.prototype.detectkey = function(){
	document.onkeydown = function(e){
		e = window.event;
		console.log(e.keyCode);
		if(e.keyCode == 38){
			inst.moveup();
		}
		else if(e.keyCode == 40){
			inst.movedown();
		}
		else if(e.keyCode == 39){
			inst.moveright();
		}
		else if(e.keyCode == 37){
			inst.moveleft();
		}
	}	
}
