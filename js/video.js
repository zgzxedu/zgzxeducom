//智能慧教育首页视频处理
(function(){
	var ivideo1 = document.getElementById("ivideo1");
	if(!ivideo1){
		return false;
	}
	var videos = ivideo1.getElementsByTagName("video");
	
	for(var i=0;i<videos.length;i++){
		videos[i].addEventListener("mouseenter",dPlay,false);
		videos[i].addEventListener("mouseleave",dPause,false);
	}
	//播放 暂停
	function dPlay(){
		if(this.src!=this.dataset.url){
			this.src = this.dataset.url;
		}
		if(this.paused)
			this.play();
	} 
	function dPause(){
		this.pause();
		this.src = "";
	} 
}());

//智能慧教育detail页面视频处理js
/*(function() {
	"use strict";
	var video, $output;
	var scale = 1;
	var initialize = function() {
		video = $("#dvideo1").get(0);
		getPoster();
	};
	function getPoster() {
		var canvas = document.createElement("canvas");
		canvas.width = video.videoWidth * scale;
		canvas.height = video.videoHeight * scale;
		canvas.getContext('2d')
			.drawImage(video, 0, 0, canvas.width, canvas.height);
		var img = document.createElement("img");
		img.src = canvas.toDataURL();
		//$("#dvideo1").attr("poster",canvas.toDataURL());
		//$output.prepend(img);
	};
	$(initialize);
}());
*/
