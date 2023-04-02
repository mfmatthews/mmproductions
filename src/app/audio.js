<script>
    
var nowplaying = null;

// Pause and reset playing audio before starting new selection  
function pauseRunningAudio(id) {    
    
    alert('in pauseRunningAudio');
    if ( nowplaying != null && nowplaying != id) {
        var x = document.getElementById(nowplaying); 
        x.pause();
        x.load();   
    }
    nowplaying = id;
}
</script>