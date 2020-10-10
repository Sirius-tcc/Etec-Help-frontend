function closeFullscreen(video) {
    if (video.exitFullscreen) {
      video.exitFullscreen();
    } else if (video.mozCancelFullScreen) { /* Firefox */
      video.mozCancelFullScreen();
    } else if (video.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      video.webkitExitFullscreen();
    } else if (video.msExitFullscreen) { /* IE/Edge */
      video.msExitFullscreen();
    }
  }

function openFullscreen(video) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
}



module.exports = { openFullscreen, closeFullscreen } 
