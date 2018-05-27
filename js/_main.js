/**
 * This is the main js file. Use this for things that are global
 * or things that you want to happen before everything else.
 * In general everything should be in a component as much as possible
 */
import exampleHomeComponent from './components/example-home.component';
import cookieNoticeComponent from './components/cookie-notice.component';

$(document).ready(function() {
  exampleHomeComponent();
  cookieNoticeComponent();
});

function leerstandsprofilBack(menu, truck){
	var clapped = document.getElementById(trucks);
        document.getElementById("test1").innerHTML = "clapped.value";
        clapped.style.width = "0px";
        var open = document.getElementById(main);
        open.style.width = "200px";
}

function leerstandsprofilMenuChange(){
	var clapped = document.getElementById(menu);
    document.getElementById("test1").innerHTML = "clapped.value";
    clapped.style.width = "0px";
    var open = document.getElementById(next);
    open.style.width = "200px";
}
