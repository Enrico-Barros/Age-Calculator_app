let d1 = document.getElementById ("input_day");
let m1 = document.getElementById ("input_month");
let y1 = document.getElementById ("input_year");

let return_day = document.getElementById ("return_day");
let return_month = document.getElementById ("return_month");
let return_year = document.getElementById ("return_year");

let title_y = y1.previousElementSibling;
let text_y = y1.nextElementSibling;
let title_m = m1.previousElementSibling;
let text_m = m1.nextElementSibling;
let title_d = d1.previousElementSibling;
let text_d = d1.nextElementSibling;

var date = new Date();
var d2 = date.getDate();
var m2 = date.getMonth() + 1;
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

validator_d = true;
validator_m = true;
validator_y = true;

function validate_year(){
    if(y1.value == ''){
        title_y.style.color = "var(--Light_red)";
        y1.style.borderColor = "var(--Light_red)";
        text_y.innerText = "This field is required"
        validator_y = false;
    }
    else if(y1.value > y2){
        title_y.style.color = "var(--Light_red)";
        y1.style.borderColor = "var(--Light_red)"
        text_y.innerText = "Must be in the past"
        validator_y = false;
    }
    else{
        title_y.style.color = "var(--Smokey_grey)";
        y1.style.borderColor = "var(--Light_grey)"
        text_y.innerText = ""
        validator_y = true;
    }
}

function validate_month(){ 
    if(m1.value == ''){
        title_m.style.color = "var(--Light_red)";
        m1.style.borderColor = "var(--Light_red)";
        text_m.innerText = "This field is required"
        validator_m = false;
    }
    else if(m1.value < 1 || m1.value > 12){
        title_m.style.color = "var(--Light_red)";
        m1.style.borderColor = "var(--Light_red)"
        text_m.innerText = "Must be a valid month"
        validator_m = false;
    }
    else{
        title_m.style.color = "var(--Smokey_grey)";
        m1.style.borderColor = "var(--Light_grey)"
        text_m.innerText = ""
        validator_m = true;
    }
}

function validate_day(){
    let val = month[m1.value - 1];

    if(d1.value == ''){
        title_d.style.color = "var(--Light_red)";
        d1.style.borderColor = "var(--Light_red)";
        text_d.innerText = "This field is required"
        validator_d = false;
    }
    else if(d1.value < 1 || d1.value > 31){
        title_d.style.color = "var(--Light_red)";
        d1.style.borderColor = "var(--Light_red)"
        text_d.innerText = "Must be a valid day"
        validator_d = false;
    }
    else if(d1.value > val){
        title_y.style.color = "var(--Light_red)";
        y1.style.borderColor = "var(--Light_red)"
        title_m.style.color = "var(--Light_red)";
        m1.style.borderColor = "var(--Light_red)"
        title_d.style.color = "var(--Light_red)";
        d1.style.borderColor = "var(--Light_red)"
        text_d.innerText = "Must be a valid date"
        validator_d = false;
    }
    else{
        title_d.style.color = "var(--Smokey_grey)";
        d1.style.borderColor = "var(--Light_grey)"
        text_d.innerText = ""
        validator_d = true;
    }
}

function reset(){
    if(return_year.innerText !== '- -' && return_month.innerText !== '- -' && return_day.innerText !== '- -'){
        location.reload();
    }
}
    
function result(){
    var image = document.getElementById ("image");
    if(validator_y == true && validator_m == true && validator_d == true){
        if(d1.value > d2){
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }
                        
        if(m1.value > m2){
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        
        var d = d2 - d1.value;
        var m = m2 - m1.value;
        var y = y2 - y1.value;
    
        return_year.innerText = y;
        return_month.innerText = m;
        return_day.innerText = d;

        image.src = 'images/reset_icon.png';
    }
}

function calc(){
    validate_year();
    validate_month();
    validate_day();
    reset();
    result();
}
