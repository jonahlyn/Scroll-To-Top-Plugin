## Scroll To Top Plugin

A replacement for 'back to top' links.

### Installation and Usage


In your long ass HTML document, include the following:

<script>
$("document").scrolltotop();
</script>


You can customize the display of the link with the following options:

* scrolltopmax - How far from the top of the page to display the link. Default is 1000.
* hpos - Position on the 'right' or 'left' side of the page. Default is right.
* vpos - Position on the 'top' or 'bottom' of the page. Default is bottom.
* left - How far from the left side of the page in pixels. Default is '5px'.
* right - How far from the right side of the page in pixels. Default is '5px'.
* top - How far from the top of the page in pixels. Default is 20px.
* bottom - How far from the bottom of the page in pixels. Default is 20px.
* linktext - Text to use for a plain-text link. Default is 'Top'.
* height - If using an image, height of icon in pixels. Default is '32px'.
* width - If using an image, width of icon in pixels. Default is '32px'.
* icon - If using an image, URL of icon or 'false' to use plain text link instead. An arrow has been provided by default.