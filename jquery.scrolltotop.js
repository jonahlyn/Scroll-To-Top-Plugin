/**
 * Plug-in: scrolltotop
 * @author: jgilstrap@gmail.com
 * 
 */
(function($,w){
  
    $.fn.scrolltotop = function(options) {
        
        var opts = $.extend({}, $.fn.scrolltotop.defaults, options),
            custCss = new Object(), finalCss, link;
        
        // Set Custom CSS options
        custCss[opts['hpos']] = opts[opts['hpos']];
        custCss[opts['vpos']] = opts[opts['vpos']];
        
        if ( opts.icon ) {
            custCss['background-image'] = 'url(' + opts.icon + ')';
            custCss['height'] = opts.height;
            custCss['width'] = opts.width;
            custCss['text-indent'] = '-9999px';
        }
        
        finalCss = $.extend({}, $.fn.scrolltotop.baseCss, custCss);
        
        // Create the back to top link and append it to the page
        link = $('<a>')
            .attr({'href':'#','id':'back-to-top'})
            .text(opts.linktext)
            .click(function(){
                $('html,body').animate({scrollTop: 0}, 'fast');
            })
            .css(finalCss)
            .prependTo('body');
        
        // Handle window scrolling
        $(w).scroll(function(){
            // If we are past scrolltopmax point, show the link    
            if($(w).scrollTop() > opts.scrolltopmax){
              // show back to top
              link.stop().animate({opacity: 1});
            }
            else{
              // hide back to top
              link.stop().animate({opacity: 0}, 0);
            }
        });
        
    };
    
    /* Customize the display of the link */
    $.fn.scrolltotop.defaults = {
        'scrolltopmax' : 1000, // when to display the link
        'hpos' : 'right',      // positon on 'right' or 'left'
        'vpos' : 'bottom',     // position on 'top' or 'bottom'
        'left' : '5px',        // how far from the left in px
        'right': '5px',        // how far from the right in px
        'top' : '20px',        // how far from the top in px
        'bottom' : '20px',     // how far from the bottom in px
        'linktext' : 'Top',    // Plain text link
        'height' : '32px',     // height of icon in px
        'width' : '32px',      // width of icon in px
        // URL of icon or 'false' to use plain text link
        'icon' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK8AAACvABQqw0mAAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xOC8wOaw6EPwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzQGstOgAAABq0lEQVRYhcWXvVnDMBCG3/DQh54mG+ANcPtVSSbATACZAI8QOkqnoCfVtWECwgZkAzNBKCI/GGNb/ktynaXT3ft8Oknn0X6/55x20dRRUigpPguApCvgDZicBQBIgPFZACRFwNR9BicFkDQBlrmh8dAAl575pJhU0itwXfDbAomZbdsCjKqOoav4p5bxdkBkZpteAJIC4KNl8rw9m9ljJwB35DbATQ8AgLWZzXxOZUUYD5AcYCop6QLgpQZegDmwANY1fneSareiagti4KFqkZmNCmsCDiemTLlvYGJmaVmsfwqYWeoKaO4We80dvxD4LJkeU6Nq5UVkZtndXydx3j91ELuS6fYAWVBXyY3UcBBRydS0ZMwPkAvcWA13CZWp0B3ABc7UuG/gvhkcIAeSNHD7OhpAR6usn2MBhIXvt1MDFBuX5GQAkmb87SHe657nYyhQvPtr34JBASSFwG1uaOHrkoZWIN8/rsxsWek5NICkJb+v4crMoibrBgFwrXv2fC+aJoeaprRF8oDD1ZvSsiGFngrkkidA0DY5+P8LfMljYNYlcWa9t6Cv/QBw9p8qWji+/AAAAABJRU5ErkJggg%3D%3D'
    };
    
    /* Only change these options if you know what you're doing */
    $.fn.scrolltotop.baseCss = {
        'position': 'fixed', 
        'opacity': 0, 
        'display': 'block'
    };   
    
})(jQuery, window);