

function openAbout(evt, aboutName) {
    
    console.log(evt)
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // showing current tab and that its active
    document.getElementById(aboutName).style.display = "block";
    evt.currentTarget.className += " active";
}
