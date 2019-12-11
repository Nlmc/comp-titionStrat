var frameNumber = 50, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500,
    // get page height from video duration
    // setHeight = document.getElementById("set-height"),
    setHeight = 1000,
    // select video element
    vid = document.getElementById('v0'),
    vidOne = document.getElementById('v1');
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  // setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  setHeight = Math.floor(vid.duration) * playbackConst + "px";
});
vidOne.addEventListener('loadedmetadata', function() {
  setHeight = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}
function scrollPlayOne(){
  var frameNumber  = window.pageYOffset/playbackConst;
  vidOne.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlayOne);
}

window.requestAnimationFrame(scrollPlay);
window.requestAnimationFrame(scrollPlayOne);

// console.log(setHeight, vid);
