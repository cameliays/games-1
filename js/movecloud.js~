var windowWidth = window.innerWidth;
function movecloud(){
	
}

movecloud.prototype.cloudmover = function(speed,classname){
	var clouds = document.getElementsByClassName(classname);
	for(i in clouds){
		if(!isNaN(i)){
			this.moveit(clouds[i],speed)
		}
	}	
}

movecloud.prototype.moveit = function(ele,speed){
	var inc = 0;
	if(!isNaN(parseInt(ele.style.right))){
		inc = parseInt(ele.style.right);
	}	
	setInterval(function(){
		
		ele.style.right = inc+"px";
		if(inc >= parseInt(windowWidth)){
			inc = (-1)*parseInt(ele.offsetWidth);	
		}
		else{
			inc = inc+4;
		}
	},speed); 
}


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

window.onload = function(){
	var mover = new movecloud(); 
	mover.cloudmover(15,'rare');
	mover.cloudmover(10,'middle');
	mover.cloudmover(5,'front');
	
	var startgame = document.getElementById("startgame");
	startgame.onclick = function(){
		startgame.remove();
		var appendhere = document.getElementById("appendhere");
		var supportmusic = document.getElementById("supportmusic");
		var playarea = document.createElement('div');
		playarea.setAttribute("class","aeroplane");
		playarea.setAttribute("id","aeroplane");
		appendhere.appendChild(playarea);
		supportmusic.setAttribute("src","files/flying.mp3");
		inst = new shootchop(playarea);
		inst.detectkey();
	}				
}

