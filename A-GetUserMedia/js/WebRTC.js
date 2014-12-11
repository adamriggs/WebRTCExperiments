'use strict'

function WebRTC(CamVideo){
    this.$camVideo = CamVideo;
    this.constraints =  {audo: true, video: true};
    
    this.initMedia();
};

WebRTC.prototype.initMedia = function(){
    console.log("WebRTC.initMedia()");
    var _this = this;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.getUserMedia(_this.constraints, _this.mediaSuccessCallback, _this.mediaErrorCallback);
};

WebRTC.prototype.mediaSuccessCallback = function(){
    console.log("WebRTC.mediaSuccessCallback()");
    window.stream = stream; // stream available to console
    if(window.URL){
        this.$camVideo.src = window.URL.createObjectURL(stream);
    } else {
        this.$camVideo.src = stream;
    }
};

WebRTC.prototype.mediaErrorCallback = function(){
    console.log("WebRTC.mediaErrorCallback()");
    
};