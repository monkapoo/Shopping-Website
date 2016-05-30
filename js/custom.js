/**
* Custom code for Found My Animal
* by a.a.t-c
**/
/* Show Product Preview Div */
var hiddenBox = $( '.prod-expander' );
            $('a.caption-overlay').on( 'click', function( event ) {
              hiddenBox.show();
              $('.prod-expander').focus();
});


/* Product Close buttons hide div, then empty it */ 
$( '.prod-close' ).click(function() {
    $('.prod-expander').hide();
    $('#proddetails').empty();
});

/* Product loading function*/

$( '.caption-overlay' ).click(function() {
   $('#proddetails').html('<div class="text-center"><img src="http://foundmyanimal.com/img/loader_2.gif"></div>');
    var prodpagelink = $(this).attr('data-link');
    $('#proddetails').load(prodpagelink, function( response, status, xhr ) {
      if ( status='error') {
        var msg = 'Sorry but we could not find the page you were looking for:';
        $('#error').html( msg + xhr.status + ' ' + xhr.statusText );
      }
    }); 
});

function prodSwitch(prodpagelink)
{
$('#proddetails').html('<div class="text-center"><img src="http://foundmyanimal.com/img/loader_2.gif"></div>');
  $('#proddetails').load(prodpagelink, function( response, status, xhr ) {
      if ( status='error') {
        var msg = 'Sorry but we could not find the page you were looking for:';
        $('#error').html( msg + xhr.status + ' ' + xhr.statusText );
      }
    }); 
}

/* Carousel */ 
$(function(){
  $('#MissionBanner').carousel();
});


// Dropdown on desktop fix

$(function(){
    $('.dropdown-toggle').dropdown();
});

/* add products to categories*/

$(document). ready (function()
{
	var elems = document.getElementsByTagName('div'),i;
    for (i in elems)
        {
		 if ((" "+elems[i].className+" ")==(" "+"col-sm-3"+" "+"product-thumb"+" "+"leashesc"+" "))
		 	{
             	document.getElementById ('leashesprod').appendChild(elems[i]);
        	}
		 else if ((" "+elems[i].className+" ")==(" "+"col-sm-3"+" "+"product-thumb"+" "+"collarsc"+" "))
		   {
		     	document.getElementById('collarsprod').appendChild(elems[i]);
		   }
		 else if ((" "+elems[i].className+" ")==(" "+"col-sm-3"+" "+"product-thumb"+" "+"accessoriesc"+" "))
		   {
		     	document.getElementById('accessoriesprod').appendChild(elems[i]);
		   }
		 else if ((" "+elems[i].className+" ")==(" "+"col-sm-3"+" "+"product-thumb"+" "+"humansc"+" "))
		   {
		     	document.getElementById('humansprod').appendChild(elems[i]);
		   }
		}
var dumptable = document.getElementById('productdump');
if (dumptable != null && dumptable != "")
{
dumptable.parentNode.removeChild(dumptable);
}
});

	
/* Menu Fix*/ 
function menuToggle(id)
	{
	 var menuMode = document.getElementById(id).style.display;
	 if (menuMode == "none")
	 {
	  	document.getElementById(id).style.display="";
	 }
	 else
	 {
	  	document.getElementById(id).style.display="none";
	 }
	}
