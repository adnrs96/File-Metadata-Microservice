$(document).ready(function(){
	var link='http://localhost:5000/filesize';
	$("#form-file").submit(function(e){
		$.ajax({
			url: link,
        	dataType: 'json',
        	method:'post',
			data: new FormData( this ),
    	  	processData: false,
      		contentType: false
		})
		.done(function(data){
			if(data.error)
			{
				alert("This Error Occured "+data.error);
			}
			else
			alert("File Size is: "+data.filesize);
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
          alert(errorThrown);
        });
		e.preventDefault();
	});
});