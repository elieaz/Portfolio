// random images genarator for hobbies section
var image = document.querySelector("img.image-hobbies");
//picures needed for the section
var images = ["ski.jpg",
			"beach.jpg",
			"gym.jpg",
			"cherry.jpg"];
//variable to not have 2 similar pics in a row
var previousImage = "ski.jpg";

function switchImage() {
	//randomize pics through all the array
	var randomNumber = Math.floor(Math.random() * images.length);
	//no repetition 2 pics in a row	
	while(previousImage === images[randomNumber]){
		var randomNumber = Math.floor(Math.random() * images.length);}
	previousImage = images[randomNumber];
	image.setAttribute("src", "pics/"+images[randomNumber]);}
//transition 1.8 seconds
setInterval(switchImage, 1800);



//off-canvas navbar
var navTrigger = document.querySelector('#open-navigation');
var nav = document.querySelector('.navigation');

navTrigger.addEventListener('click', function(){
  nav.classList.toggle('navigation-opened');

  if(nav.classList.contains('navigation-opened')){
      nav.setAttribute('.navigation')
    }
    else{
      nav.setAttribute('.navigation-opened')
    }
});