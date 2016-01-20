
function cast(){
 var link = document.getElementById('content').value;
 var xhr = new XMLHttpRequest();
 var server = document.getElementById('server').value;
 var reqLink = "http://"+server+"/"+link;
 alert(reqLink);
 xhr.open("GET", reqLink, true); 
 xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
  alert('OK');
   // WARNING! Might be injecting a malicious script!
    document.getElementById("message").innerHTML = xhr.responseText;
  }
 }
 xhr.send();
}

function getLink(tab){
 document.getElementById('content').value = tab.url; 
}

function stopCast(){
 var xhr = new XMLHttpRequest();
 var server = document.getElementById('server').val();
 xhr.open("GET", "http://"+server+"/stop", true);
 xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be injecting a malicious script!
    document.getElementById("message").innerHTML = xhr.responseText;
  }
 }
 xhr.send();
}
chrome.tabs.getSelected(null,getLink);
document.getElementById('cast').onclick=cast;
document.getElementById('stop').onclick=stopCast;