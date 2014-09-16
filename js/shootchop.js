var inst;
function shootchop(ele){
	this.plane = ele;
	this.audio = null;
	this.explosion = null;
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
		var villians = document.getElementsByClassName("villian");
		for(i in villians){
			if(!isNaN(i)){
				if(parseInt(bullet.style.left) >= parseInt(villians[i].style.left)){
					//console.log("now");
					if((parseInt(bullet.style.bottom) >= parseInt(villians[i].style.bottom)) && (parseInt(bullet.style.bottom) <= parseInt(villians[i].style.bottom)+124)){
						inst.explosion.play();
						window.clearInterval(ci);
						bullet.remove();
						villians[i].remove();
					}
				}
			}
		}
	},1)
}
shootchop.prototype.moveVillian = function(villian){
	var ci = setInterval(function(){
		villian.style.left = (parseInt(villian.style.left)-5)+"px";	
		if(parseInt(villian.style.left) <= -180){
			window.clearInterval(ci);
			villian.remove();
		}
		if(parseInt(villian.style.left+180) <= parseInt(playarea.style.left)+225){
			//console.log("now");
			if((parseInt(villian.style.bottom)+155 >= parseInt(playarea.style.bottom)) && (parseInt(villian.style.bottom) <= parseInt(playarea.style.bottom)+155)){
				inst.explosion.play();
				window.clearInterval(ci);
				villian.remove();
				playarea.remove();
				setTimeout(function(){
					window.location.reload();
				},2000);
			}
		}
	},10)
}
shootchop.prototype.fire = function(){
	var attributes = new Array();
	attributes['style'] = 'width:20px;height:5px;position:absolute;background:red';
	var bullet = createElement('span',attributes);
	appendhere.appendChild(bullet);
	bullet.style.bottom = parseInt(playarea.style.bottom)+76+"px";
	bullet.style.left = parseInt(playarea.style.left)+225+"px";
	this.moveBullet(bullet);
	this.audio.volume = 1;
	this.audio.play();
	this.audio.currentTime = 0;
	
}

shootchop.prototype.villians = function(){
	var attributes = new Array();
	attributes['style'] = 'position:absolute;';
	attributes['src'] = 'files/planeg.png';
	attributes['class'] = 'villian';
	var villian = createElement('img',attributes);
	appendhere.appendChild(villian);
	villian.style.bottom = this.getRandomArbitrary()+"px";
	villian.style.left = windowWidth-120+"px";
	this.moveVillian(villian);
}

shootchop.prototype.getRandomArbitrary = function() {
    return Math.random() * (100 + 200) - 200;
}

shootchop.prototype.detectkey = function(){
	var attributes = new Array();
	attributes['src'] = 'files/gunshot.mp3';
	this.audio = createElement('audio',attributes);
	this.audio.volume = 1;
	document.getElementById('shootchop').appendChild(this.audio);
	this.explosion = document.getElementById('explosion');
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
		else if(e.keyCode == 13){
			inst.fire();	
		}
	}	
}
