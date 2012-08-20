$(document).ready(function(){

    $("#base_image").css("display","none");
    if ($("#machine option:selected").val() == "machine" ) {
        $("#base_image").slideDown("medium"); //Slide Down Effect
    } else {
        $("#base_image").slideUp("medium");	//Slide Up Effect
    }
    	
    $("#machine").change(function(){
    	if ($('option:selected').val() == "machine" ) {
        	$("#base_image").slideDown("medium"); //Slide Down Effect
			$("#image_groups").show();
        } else {
            $("#base_image").slideUp("medium");	//Slide Up Effect
            $("#image_groups").hide();
    	}
    	return false;
    
	});
	
	
	showBaseImages();
	$("#groups").change(function(){
		showBaseImages();
		$("#console_images > select").val("nothing-selected");
		$("#gui_images > select").val("nothing-selected");
		$("#lsb_images > select").val("nothing-selected");
		$("#rt_images > select").val("nothing-selected");
		$("#dev_images > select").val("nothing-selected");
		
		$("#select_base_image_form").nextAll('p').addClass("hidden");
		
		var g = $("#groups option:selected").val();
		switch(g) {
			case 'no-group':
				$("#select_base_image_form").nextAll('p').addClass("hidden");
				break;
			case 'ba':
				$("#select_base_image_form").nextAll('p').addClass("hidden");
				$("#build-appliance-image").removeClass("hidden");
				break;
			case 'own':
				$("#select_base_image_form").nextAll('p').addClass("hidden");
				$("#own-image").removeClass("hidden");
				break;
		}
		

	})

	$("#console_images,#gui_images,#lsb_images,#rt_images,#dev_images > select").click(function(){
		baseImageSelected();	
		description();
	})

		
});


function showBaseImages() {
	
			$("#image_groups ~ fieldset:not(.hidden) > button").addClass("hidden");

        	var g = $("#groups option:selected").val();
			switch (g) {
				case 'ci':
					$("#console_images").removeClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#dev_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
				case 'gui':
					$("#gui_images").removeClass("hidden");
					$("#console_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#dev_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
				case 'lsb':
					$("#lsb_images").removeClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#dev_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
				case 'rt':
					$("#rt_images").removeClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#dev_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
				case 'dev':
					$("#dev_images").removeClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
				case 'ba':
					$("#two-actions").removeClass("hidden");	
					$("#dev_images").addClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#one-action").addClass("hidden");
					$("#image_groups > button").removeClass("hidden");	
					break;
				case 'own':
					$("#one-action").removeClass("hidden");
					$("#image_groups > button").removeClass("hidden");	
					$("#dev_images").addClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#rt_images").addClass("hidden");
					$("#two-actions").addClass("hidden");
					break;
				case 'no-group':
					$("#actions").addClass("hidden");	
					$("#dev_images").addClass("hidden");
					$("#console_images").addClass("hidden");
					$("#gui_images").addClass("hidden");
					$("#lsb_images").addClass("hidden");
					$("#two-actions,#one-action").addClass("hidden");
					$("#image_groups > button").addClass("hidden");	
					break;
			}

}

function baseImageSelected() {
		
		var image = $("#image_groups ~ fieldset:not(.hidden) > select").val();
			if (image != "nothing-selected") {
				$("#image_groups ~ fieldset:not(.hidden) > button").removeClass("hidden");
				$("#two-actions").removeClass("hidden");
				$("#one-action").addClass("hidden");
			} else {
				$("#image_groups ~ fieldset:not(.hidden) > button").addClass("hidden");
				$("#two-actions,#one-action").addClass("hidden");
			}
			

}

function description() {

 	var image = $("#image_groups ~ fieldset:not(.hidden) > select").val();
 	switch (image) {
		case 'core-image-base':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-base").removeClass("hidden");
			break;
		case 'core-image-basic':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-basic").removeClass("hidden");
			break;
		case 'core-image-clutter':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-clutter").removeClass("hidden");
			break;
		case 'core-image-core':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-core").removeClass("hidden");
			break;
		case 'core-image-lsb':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-lsb").removeClass("hidden");
			break;
		case 'core-image-lsb-dev':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-lsb-dev").removeClass("hidden");
			break;
		case 'core-image-lsb-sdk':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-lsb-sdk").removeClass("hidden");
			break;
		case 'core-image-minimal':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-minimal").removeClass("hidden");
			break;
		case 'core-image-minimal-dev':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-minimal-dev").removeClass("hidden");
			break;
		case 'core-image-minimal-initramfs':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-minimal-initramfs").removeClass("hidden");
			break;
		case 'core-image-minimal-mtdutils':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-minimal-mtdutils").removeClass("hidden");
			break;
		case 'core-image-rt':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-rt").removeClass("hidden");
			break;
		case 'core-image-rt-sdk':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-rt-sdk").removeClass("hidden");
			break;
		case 'core-image-sato':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-sato").removeClass("hidden");
			break;
		case 'core-image-sato-dev':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-sato-dev").removeClass("hidden");
			break;
		case 'core-image-sato-sdk':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#core-image-sato-sdk").removeClass("hidden");
			break;
		case 'qt4e-demo-image':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			$("#qt4e-demo-image").removeClass("hidden");
			break;
		case 'nothing-selected':
			$("#select_base_image_form").nextAll('p').addClass("hidden");
			break;
	}
 	
	

}
