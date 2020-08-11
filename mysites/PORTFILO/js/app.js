$(function() {
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();
       let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function() {
            
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
            
        }, 200);
               
    });
    
    
     modalClose.on("click", function(event) {
        event.preventDefault();
       let $this = $(this);
        let modalParent = $this.parents('.modal');
         
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        
    });
    
    
     $(".modal").on("click", function(event) {
       let $this = $(this);
         
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
        
    });    
    
    $(".modal__dialog").on("click", function(event) {
       event.stopPropagation();
        
    });    
    
    
})