$(window).load(function(){	
$(&quot;#loading-elprof&quot;).fadeOut(2000 , function() {
$(&quot;#loading-elprof&quot;).remove();
});
});
$(document).ready(function() {
$(&quot;#srch-btn&quot;).click(function(){
$(&quot;.search-elprof&quot;).slideDown(1000, function() {
$(&quot;.form&quot;).fadeIn(1510);
$(&quot;#close-srch&quot;).fadeIn(1510);		
});		
});
$(&quot;#close-srch&quot;).click(function() {
$(&quot;.search-elprof&quot;).fadeOut(500, function(){
$(&quot;.form&quot;).fadeOut(1510);
$(&quot;#close-srch&quot;).fadeOut(1510);
});
});
});
$(document).ready(function() {
$(&quot;.home&quot;).click(function(){
$(&quot;.home&quot;).css({
transform:&quot;scale(2)&quot;
});
});
});
