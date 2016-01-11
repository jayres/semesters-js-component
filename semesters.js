//--- Date Stuff
function curSemester(fall, spr, sum) {
  //--- FORMAT: MMDD e.g., August 22 is 0822
  var fallStartDateDash = fall; // Fall: August 31 - December 31
  var fallEndDateDash = 1231;
  var winBreakDateDash = 101; // Rollover for numeric value of dates because of new year
  var winBreakDateEndDash = spr - 1;
  var sprStartDateDash = spr; // Spring: January 25 - May 30
  var sprEndDateDash = sum - 1;
  var sumStartDateDash = sum; // Summer: May 31 - August 30
  var sumEndDateDash = fall - 1;
  var fullDateDash = new Date();
  var timeDash = fullDateDash.getTime();
  var dateDash = fullDateDash.getDate();
  var monthDash = fullDateDash.getMonth() + 1;
  var yearDash = fullDateDash.getFullYear();
  var yearDashWin = fullDateDash.getFullYear() - 1;
  if (dateDash <= 9) {
    var dateDashString = '0' + dateDash.toString();
  } else {
    var dateDashString = dateDash.toString();
  }
  var curDateDashPre = monthDash.toString() + dateDashString;
  var curDateDash = parseInt(curDateDashPre);
  if (curDateDash >= fallStartDateDash && curDateDash <= fallEndDateDash) {
    return 'Fall' + yearDash
    //--- TNS specific usage 
    // curSemDash = '201510';
    // document.getElementById("coursesdashtitle").innerHTML = 'Fall ' + yearDash;
  }
  if (curDateDash >= winBreakDateDash && curDateDash <= winBreakDateEndDash) {
    return 'Fall' + yearDash
    //--- TNS specific usage
    // curSemDash = '201510';
    // document.getElementById("coursesdashtitle").innerHTML = 'Fall ' + yearDashWin;
  }
  if (curDateDash >= sprStartDateDash && curDateDash <= sprEndDateDash) {
    return 'Spring' + yearDash
    //--- TNS specific usage 
    //curSemDash = '201530';
    //document.getElementById("coursesdashtitle").innerHTML = 'Spring ' + yearDash;
  }
  if (curDateDash >= sumStartDateDash && curDateDash <= sumEndDateDash) {
    return 'Summer' + yearDash
    //--- TNS specific usage 
    //curSemDash = '201540';
    //document.getElementById("coursesdashtitle").innerHTML = 'Summer ' + yearDash;
  }
}

curSemester(831,111,531);
