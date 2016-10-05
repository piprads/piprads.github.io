var message_box = function() {
	var button = '<input type="button" onclick="message_box.close_message();" value="Okay!" />';
	return {
		show_message: function(title, body) {
			if(jQuery('#message_box').html() === null) {
				var message = '<div id="message_box"><h1>' + title + '</h1><br /><h3>' + body + '</h3><br/>' + button + '</div>';
				jQuery(document.body).append( message );
				jQuery(document.body).append( '<div id="darkbg"></div>' );
				jQuery('#darkbg').show();
				jQuery('#darkbg').css('height', jQuery('html, body').height());
 
				jQuery('#message_box').css('top', jQuery('html, body').scrollTop() + 150);
				jQuery('#message_box').show('slow');
			} else {
				var message = '<h1>' + title + '</h1><br /><h3>' + body + '</h3><br/>' + button;
				jQuery('#darkbg').show();
				jQuery('#darkbg').css('height', jQuery('html, body').height());
 
				jQuery('#message_box').css('top', jQuery('html, body').scrollTop() + 150);
				jQuery('#message_box').show('slow');
				jQuery('#message_box').html( message );
			}
		},
		close_message: function() {
			jQuery('#message_box').hide('fast');
			jQuery('#darkbg').hide();
			window.location = "index.html";
		}
	}
}();