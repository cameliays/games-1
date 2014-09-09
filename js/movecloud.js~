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
	if(!isNaN(parseInt(ele.style.left))){
		inc = parseInt(ele.style.left);
	}	
	console.log(ele.offsetWidth);
	setInterval(function(){
		
		ele.style.left = inc+"px";
		if(inc >= parseInt(windowWidth)){
			
			inc = (-1)*parseInt(ele.offsetWidth);
			console.log(inc);	
		}
		else{
			inc++;
		}
	},speed); 
}

window.onload = function(){
	var mover = new movecloud(); 
	mover.cloudmover(60,'rare');
	mover.cloudmover(30,'middle');
	mover.cloudmover(10,'front');				
}

