var saveBtn = $('.saveBtn');
var description = ('.description');
//document loads at the same time
$(document).ready(function() {
    //when save button is clicked then data from HTML is stored in local storage
    saveBtn.on('click', function  (event) {
        //prevents button from loading default action
        event.preventDefault();
        //to verify that when button is clicked then button is passing through information 
        console.log('button clicked');
        //takes text value and stores it in text input to match id
        let input = $(this).siblings('textarea').val();
        //takes input from textarea and attributes it to an id in HTML
        let textArea = $(this).siblings('textarea').attr('id');
        //stores inputted data into local storage along with correct id's
        localStorage.setItem(textArea, input);    
    });
    //stores realtime into current hour 
    let currentHour = moment().hour();
    //takes description class and runs it through a for loop
    $('.description').each(function () {
        //turns timeHour into a string to be compared with the correct hour
        let timeHour = parseInt($(this).attr('id'));
        //adds class of past if time hour is less than current hour
        if (timeHour < currentHour) {
            $(this).addClass('past');
        }
        //adds class of present if time hour is equal to current hour
        if (timeHour === currentHour) {
            $(this).addClass('present');
        }
        //adds class of future if time hour is greater than current hour
        if (timeHour > currentHour) {
            $(this).addClass('future');
        }
    })
    //gets local storage for each hour
    function init() {
        //runnig textarea in a for loop '.each'
        $('.description').each(function () {
            //gets value from local storage
            $(this).val(localStorage.getItem(this.id));
        });
    }
    //coding format for realtime; current day and time
    var today = dayjs();
    //displays format of current day and time in HTML 
    $('#currentDay').text(today.format('dddd, MMMM D, H:mma'));
    //calling init function to be used
    init();
});