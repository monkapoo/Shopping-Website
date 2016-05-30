function menuToggle(id)
{var menuMode=document.getElementById(id).style.display;if(menuMode=="none")
{document.getElementById(id).style.display="";}
else
{document.getElementById(id).style.display="none";}}
window.onload=function(){document.getElementById('shipaddress-isresidential').checked=true};