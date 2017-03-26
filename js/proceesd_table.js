/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;



// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.

$(document).ready(function() {
    var id = localStorage.id;
    var url = "http://najd.ogail.net/app/table.php";
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var class1 = field.class;
            var day = field.day;
            var one = field.one;
            var two = field.two;
            var three = field.three;
            var four = field.four;
            var five = field.five;
            var six = field.six;
            var seven = field.seven;
            if(day == 'su'){
                if (one == id){
                    $("#su_1").append( class1 );
                }
                if (two == id){
                    $("#su_2").append( class1 );
                }
                if (three == id){
                    $("#su_3").append( class1 );
                }
                if (four == id){
                    $("#su_4").append( class1 );
                }
                if (five == id){
                    $("#su_5").append( class1 );
                }
                if (six == id){
                    $("#su_6").append( class1 );
                }
                if (seven == id){
                    $("#su_7").append( class1 );
                }
            }
            if(day == 'mu'){
                if (one == id){
                    $("#mu_1").append( class1 );
                }
                if (two == id){
                    $("#mu_2").append( class1 );
                }
                if (three == id){
                    $("#mu_3").append( class1 );
                }
                if (four == id){
                    $("#mu_4").append( class1 );
                }
                if (five == id){
                    $("#mu_5").append( class1 );
                }
                if (six == id){
                    $("#mu_6").append( class1 );
                }
                if (seven == id){
                    $("#mu_7").append( class1 );
                }
            }
            if(day == 'tu'){
                if (one == id){
                    $("#tu_1").append( class1 );
                }
                if (two == id){
                    $("#tu_2").append( class1 );
                }
                if (three == id){
                    $("#tu_3").append( class1 );
                }
                if (four == id){
                    $("#tu_4").append( class1 );
                }
                if (five == id){
                    $("#tu_5").append( class1 );
                }
                if (six == id){
                    $("#tu_6").append( class1 );
                }
                if (seven == id){
                    $("#tu_7").append( class1 );
                }
            }
            if(day == 'wi'){
                if (one == id){
                    $("#wi_1").append( class1 );
                }
                if (two == id){
                    $("#wi_2").append( class1 );
                }
                if (three == id){
                    $("#wi_3").append( class1 );
                }
                if (four == id){
                    $("#wi_4").append( class1 );
                }
                if (five == id){
                    $("#wi_5").append( class1 );
                }
                if (six == id){
                    $("#wi_6").append( class1 );
                }
                if (seven == id){
                    $("#wi_7").append( class1 );
                }
            }
            if(day == 'th'){
                if (one == id){
                    $("#th_1").append( class1 );
                }
                if (two == id){
                    $("#th_2").append( class1 );
                }
                if (three == id){
                    $("#th_3").append( class1 );
                }
                if (four == id){
                    $("#th_4").append( class1 );
                }
                if (five == id){
                    $("#th_5").append( class1 );
                }
                if (six == id){
                    $("#th_6").append( class1 );
                }
                if (seven == id){
                    $("#th_7").append( class1 );
                }
            }
        });
    });
});


