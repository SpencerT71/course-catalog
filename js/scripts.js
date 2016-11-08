// YOUR SCRIPTS

//Grid View
$('#grid').click( function() {
    //Remove ONLY list class
    $('.cd-gallery').removeClass('list');
    //Add ONLY Grid class
    $('.cd-gallery').addClass('grid');
    
});

//List View

$('#list').click( function() {
    //Remove ONLY list class
    $('.cd-gallery').removeClass('grid');
    //Add ONLY Grid class
    $('.cd-gallery').addClass('list');
    
});