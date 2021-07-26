let maleArray = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
let femaleArray = ["Akosua" , "Adowoa" , "Abenaa" , "Akua" , "Yaa" , "Afua" , "Ama"];
let dayArray = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
let CC, YY, MM, DD, d, dayvalue;
function validate() {
    let genders = document.getElementById("male");
    console.log(genders);
    if( document.enterform.year.value == "" || document.enterform.year.value.length !=4 || document.enterform.year.value >2100 || document.enterform.year.value <=1900) {
       alert( "Not valid!" );
       document.enterform.year.focus();
    }
       else if( document.enterform.month.value == "" || isNaN( document.enterform.month.value ) ||
       document.enterform.month.value.length != 2 || document.enterform.month.value > 12  || document.enterform.month.value <= 0){
          alert( "Not valid!" );
          document.enterform.month.focus() ;
        }
          else if( document.enterform.date.value == "" || isNaN( document.enterform.month.value ) ||
  document.enterform.month.value.length != 2|| document.enterform.date.value > 31 || document.enterform.date.value <= 0) {
     alert( "Not valid!" );
     document.enterform.day.focus();
     }
        else{
        function calculateDayvalue(){
            year = document.getElementById("year").value;
            CC = parseInt(year.substring(0,2));
            YY = parseInt(year.substring(2,4));
            MM = parseInt(document.getElementById("month").value);
            DD = parseInt(document.getElementById("date").value);
            d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
            console.log(d);
            return (Math.floor(d));}
            function getGender(){
                let genders = document.getElementsByName("gender");
                if(genders[0].checked == true){
                  let gender = "male";}
            else if(genders[1].checked == true){
    let gender = "female";}
    else{
    switch(gender){
        case "male":
          if (dayValue == 1){
            alert("You were born on " +dayNames[0] + " and Your akan name is " +maleArray[0]+"!");
          }
          else if(dayValue == 2){
            alert("You were born on "+dayNames[1] + " and Your akan name is " +maleArray[1]+"!");
          }
          else if(dayValue == 3){
            alert("You were born on " +dayNames[2]+ " and Your akan name is " +maleArray[2]+"!");
          }
          else if(dayValue == 4){
            alert("You were born on "+dayNames[3] +  " and Your akan name is " +maleArray[3]+"!");
          }
          else if(dayValue == 5){
            alert("You were born on "+dayNames[4] +  " and Your akan name is " +maleArray[4]+"!");
          }
          else if(dayValue == 6){
            alert("You were born on "+dayNames[5] +  " and Your akan name is " +maleArray[5]+"!");
          }
          else if(dayValue == -0){
            alert("You were born on "+dayNames[6] + " and Your akan name is " +maleArray[6]+"!");
          }
        break;
        case "female":
          if (dayValue == 1){
            alert("You were born on "+dayNames[0] + " and Your akan name is  " +femaleArray[0]+"!");
          }
          else if(dayValue == 2){
            alert("You were born on " +dayNames[1] + " and Your akan name is " +femaleArray[1]+"!");
          }
          else if(dayValue == 3){
            alert("You were born on " +dayNames[2] + " and Your akan name is " +femaleArray[2]+"!");
          }
          else if(dayValue == 4){
            alert("You were born on " +dayNames[3] + " and Your akan name is " +femaleNames[3]+"!");
          }
          else if(dayValue == 5){
            alert("You were born on " +dayNames[4] + " and Your akan name is " +femaleArray[4]+"!");
          }
          else if(dayValue == 6){
            alert("You were born on " +dayNames[5] + " and Your akan name is " + femaleArray[5]+"!");
          }else if(dayValue == -0){
            alert("You were born on " +dayNames[6] + " and Your akan name is " +femaleArray[6]+"!");}
        break
    default:
          }
            function findName(){
                dayValue = calculateDayValue();
                getGender();}}}}}