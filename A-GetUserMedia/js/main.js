'use strict'

var app = null;

$(document).ready(function(){
    var $camVideo = $('#camVideo');
    app = new WebRTC($camVideo);
    
});