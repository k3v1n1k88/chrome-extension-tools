var s1 = document.getElementById('input1');
var s2 = document.getElementById('input2');

function select_scroll_1(e) {
    if(s1.matches(":focus")){
        s2.scrollTop = s1.scrollTop; 
    }
}
function select_scroll_2(e) { 
    if(s2.matches(":focus")){
        s1.scrollTop = s2.scrollTop; 
    } 
}

$(element).bind('focus', function(e){
    e.preventDefault();
});

s1.addEventListener('scroll', select_scroll_1, false);
s2.addEventListener('scroll', select_scroll_2, false);