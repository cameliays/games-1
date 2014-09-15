var inst;
function shootchop(ele){
	this.plane = ele;
	this.audio = null;
}

shootchop.prototype.moveup = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.bottom))){
		inc = parseInt(this.plane.style.bottom);
	}
	this.plane.style.bottom = inc + 8+"px";
}
shootchop.prototype.movedown = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.bottom))){
		inc = parseInt(this.plane.style.bottom);
	}
	this.plane.style.bottom = inc - 8+"px";
}
shootchop.prototype.moveright = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.left))){
		inc = parseInt(this.plane.style.left);
	}
	this.plane.style.left = inc + 8+"px";
}
shootchop.prototype.moveleft = function(){
	var inc = 0;
	if(!isNaN(parseInt(this.plane.style.left))){
		inc = parseInt(this.plane.style.left);
	}
	this.plane.style.left = inc - 8+"px";
}

shootchop.prototype.moveBullet = function(bullet){
	var ci = setInterval(function(){
		bullet.style.left = parseInt(bullet.style.left)+5+"px";	
		if(parseInt(bullet.style.left) >= windowWidth){
			window.clearInterval(ci);
			bullet.remove();
		}
	},1)
}

shootchop.prototype.fire = function(){
	var attributes = new Array();
	attributes['style'] = 'width:20px;height:5px;position:absolute;background:yellow';
	var bullet = createElement('span',attributes);
	appendhere.appendChild(bullet);
	bullet.style.bottom = parseInt(playarea.style.bottom)+76+"px";
	bullet.style.left = parseInt(playarea.style.left)+225+"px";
	this.moveBullet(bullet);
	this.audio.volume = 1;
	this.audio.currentTime = 0;
	this.audio.play();
}
shootchop.prototype.detectkey = function(){
	var attributes = new Array();
	attributes['src'] = 'files/gunshot.mp3';
	this.audio = createElement('audio',attributes);
	this.audio.volume = 1;
	document.getElementById('shootchop').appendChild(this.audio);
	document.onkeydown = function(e){
		
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
		else if(e.keyCode == 32){
			inst.fire();	
		}
	}	
}
