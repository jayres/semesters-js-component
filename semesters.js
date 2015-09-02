//--- Date Stuff
  //--- FORMAT: MMDD e.g., August 22 is 0822
  var fallStartDateDash = 831; // Fall: August 31 - December 31
  var fallEndDateDash = 1231;
  var winBreakDateDash = 101; // Rollover for numeric value of dates because of new year
  var winBreakDateEndDash = 124;
  var sprStartDateDash = 125; // Spring: January 25 - May 30
  var sprEndDateDash = 530;
  var sumStartDateDash = 531; // Summer: May 31 - August 30
  var sumEndDateDash = 830;
  var fullDateDash = new Date();
  var dateDash = fullDateDash.getDate();
  var monthDash = fullDateDash.getMonth()+1;
  var yearDash = fullDateDash.getFullYear();
  var yearDashWin = fullDateDash.getFullYear()-1;

  if (dateDash <= 9) { 
    dateDashString = '0' + dateDash.toString(); 
  } else { 
    dateDashString = dateDash.toString(); 
  }
  curDateDashPre = monthDash.toString() + dateDashString;
  curDateDash = parseInt(curDateDashPre);

  if (curDateDash >= fallStartDateDash && curDateDash <= fallEndDateDash) {
    console.log('Fall');
//--- change an object with the id 'semesterheading' to include semester   
    document.getElementById("semesterheading").innerHTML = 'Fall ' + yearDashWin; 
  }
  if (curDateDash >= winBreakDateDash && curDateDash <= winBreakDateEndDash) {
    console.log('Fall');
//--- change an object with the id 'semesterheading' to include semester      
    document.getElementById("semesterheading").innerHTML = 'Fall ' + yearDashWin;
  }
  if (curDateDash >= sprStartDateDash && curDateDash <= sprEndDateDash) {
    console.log('Spring');
//--- change an object with the id 'semesterheading' to include semester      
    document.getElementById("semesterheading").innerHTML = 'Spring ' + yearDash;
  }
  if (curDateDash >= sumStartDateDash && curDateDash <= sumEndDateDash) {
    console.log('Summer');
//--- change an object with the id 'semesterheading' to include semester  
    document.getElementById("semesterheading").innerHTML = 'Summer ' + yearDash;
  }
//--- End Date Stuff
