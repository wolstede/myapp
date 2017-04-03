function changetextvalue(someitem, someval)
{
document.getElementById(someitem).innerHTML = someval
}

function documentwrite(someitem)
{
document.write(someitem)
}











// Local storage
// SetLocalVal and GetLocalVal - use cookies of available, if not local storage
// Reason: for testing, local storage doesn't seem to work.  On devices, local storage works but not always cookies.  Should cover everything.

var daystoExpire = 2000;
var expirydate = new Date(); 
expirydate.setTime(expirydate.getTime() + (daystoExpire*24*60*60*1000));


function GetCookie(name) 
{  
var thecookie=document.cookie
var namestring = name+'='  
var cookieval = null
var cookievalbeg=-1
var cookievalend=thecookie.length
for (var beg=0; beg<thecookie.length; beg++)
{
var end=beg+namestring.length
if (thecookie.substring(beg, end) == namestring)
{
cookievalbeg=end
}
}
if (cookievalbeg > -1)
{
cookievalend=thecookie.indexOf(';', cookievalbeg) // look for next ; after beginning of value
if (cookievalend == -1) (cookievalend = thecookie.length)
cookieval = unescape(thecookie.substring(cookievalbeg, cookievalend))
} 

return cookieval
}


function SetCookie(name, val) 
{  
var cookiestring = name+'='+escape(val)+'; expires='+ expirydate.toGMTString()
document.cookie=cookiestring
}

var usecookies=1
SetCookie('dummy', 'answer')
if (GetCookie('dummy')==null) {usecookies=0}

function SetLocalVal(somename, someval)
{
if (usecookies==1) 
{
SetCookie(somename, someval)
}
else
{
localStorage.setItem(somename, someval)
}
}

function GetLocalVal(somename)
{
if (usecookies==1) 
{
return GetCookie(somename)
}
else
{
return localStorage.getItem(somename)
}
}

// end Local Storage



var currentnumberexercises=GetLocalVal('exercisesperset')
if (currentnumberexercises==null || currentnumberexercises>defaultnumberexercisesperset) {currentnumberexercises=defaultnumberexercisesperset} else {currentnumberexercises=currentnumberexercises*1}
SetLocalVal('exercisesperset', currentnumberexercises)

var exercises=
[
['', 'Introduction', [0, 0, 0, 0, 0], 'Welcome to BrainBoxFun: 10 sets of exercises, with up to '+defaultnumberexercisesperset+' exercises per set (currently '+currentnumberexercises+' per set). Score 1 point for each correct answer.', [


], 0],
[1, 'Low-High', [3, 4, 5, 6, 7],'You will see some tiles with different numbers on them, plus 1 or 2 blank ones.  During the countdown, memorize the order of the tiles, lowest to highest.' , [[0,0,"lightbluetile4"],[0,4,"lightbluetile8"],[2,2,"lightbluetile5"],[3,5,"lightbluetile9"],[4,8,"lightbluetilespace"],[8,10,"lightbluetile2"]], 8], 
[2, 'Rotations', [12, 14, 16, 18, 20],  'Some of the 3x3 shapes are identical but rotated. Identify all of these and press on them (order unimportant).  OK stops the countdown early.', [[0,0,"violet"],[0,1,"blue"],[0,2,"orange"],[0,4,"white"],[0,5,"violet"],[0,6,"violet"],[0,8,"red"],[0,9,"white"],[0,10,"orange"],[1,0,"violet"],[1,1,"blackhub"],[1,2,"white"],[1,4,"red"],[1,5,"blackhub"],[1,6,"blue"],[1,8,"red"],[1,9,"blackhub"],[1,10,"violet"],[2,0,"white"],[2,1,"red"],[2,2,"red"],[2,4,"red"],[2,5,"white"],[2,6,"orange"],[2,8,"white"],[2,9,"blue"],[2,10,"violet"],[4,0,"red"],[4,1,"white"],[4,2,"orange"],[4,4,"violet"],[4,5,"violet"],[4,6,"orange"],[5,0,"red"],[5,1,"blackhub"],[5,2,"blue"],[5,4,"blue"],[5,5,"blackhub"],[5,6,"white"],[6,0,"white"],[6,1,"violet"],[6,2,"violet"],[6,4,"white"],[6,5,"red"],[6,6,"red"], [10,5,"ok"]], 15], 
[3, 'Jumble', [10, 15, 20, 25, 30],  'The jumbled-up letters of a word are displayed on two lines.  Spell out the word by pressing the letters, one at a time, before the countdown ends.', [[1,1,"blueO"],[2,2,"blueT"],[1,3,"blueU"],[2,4,"blueH"],[1,5,"blueB"],[2,6,"blueG"]], 8], 
[4, 'Arithmetic', [ 7, 9, 11, 13, 17], 'You will be presented with two numbers and an arithmetic operator: +, -, x or ÷. Enter the result using the keypad. The result entered is shown to the right of the = sign.', [[0,0,"white"],[0,1,"white"],[0,2,"white"],[0,3,"white"],[0,4,"white"],[0,5,"white"],[0,6,"white"],[0,7,"white"],[0,8,"white"],[0,9,"white"],[0,10,"white"],[1,0,"white"],[1,1,"white"],[1,2,"white"],[1,3,"white"],[1,4,"white"],[1,5,"red4"],[1,6,"red5"],[1,7,"white"],[1,8,"white"],[1,9,"white"],[1,10,"white"],[2,0,"white"],[2,1,"white"],[2,2,"white"],[2,3,"white"],[2,4,"white"],[2,5,"red3"],[2,6,"red0"],[2,7,"blacksubtract"],[2,8,"white"],[2,9,"white"],[2,10,"white"],[3,0,"white"],[3,1,"white"],[3,2,"white"],[3,3,"white"],[3,4,"white"],[3,5,"white"],[3,6,"white"],[3,7,"white"],[3,8,"white"],[3,9,"white"],[3,10,"white"],[4,0,"white"],[4,1,"blackequals"],[4,2,"white"],[4,3,"white"],[4,4,"white"],[4,5,"white"],[4,6,"white"],[4,7,"white"],[4,8,"white"],[4,9,"white"],[4,10,"white"],
// [6,4,"button1"],[6,5,"button2"],[6,6,"button3"],[7,4,"button4"],[7,5,"button5"],[7,6,"button6"],[8,4,"button7"],[8,5,"button8"],[8,6,"button9"],[9,4,"buttonplusminus"],[9,5,"button0"],[9,6,"buttonC"],[9,7,"ok"]
[6,3,"button1"],[6,5,"button2"],[6,7,"button3"],[7,2,"button4"],[7,4,"button5"],[7,6,"button6"],[7,8,"button7"],[8,3,"button8"],[8,5,"button9"],[8,7,"button0"],[9,4,"buttonplusminus"],[9,6,"buttonC"],[10,5,"ok"]
], 10], 
[5, 'Sequences', [10, 15, 20, 25, 30],  'Four of the 3x3 shapes displayed form a sequence, with central numbers 1-4 in that order. Three are above the grey line.  Press on the missing one below the line.', [[0,0,"white"],[0,1,"white"],[0,2,"white"],[0,4,"violet3"],[0,5,"bluesquare"],[0,6,"white"],[0,8,"white"],[0,9,"white"],[0,10,"red1"],[1,0,"white"],[1,1,"blackhubnumber1"],[1,2,"white"],[1,4,"white"],[1,5,"blackhubnumber2"],[1,6,"white"],[1,8,"white"],[1,9,"blackhubnumber3"],[1,10,"white"],[2,0,"blue5"],[2,1,"orangesquare"],[2,2,"white"],[2,4,"white"],[2,5,"white"],[2,6,"white"],[2,8,"white"],[2,9,"violetsquare"],[2,10,"white"],[3,0,"greyline"],[3,1,"greyline"],[3,2,"greyline"],[3,3,"greyline"],[3,4,"greyline"],[3,5,"greyline"],[3,6,"greyline"],[3,7,"greyline"],[3,8,"greyline"],[3,9,"greyline"],[3,10,"greyline"],[4,0,"white"],[4,1,"white"],[4,2,"white"],[4,4,"white"],[4,5,"redsquare"],[4,6,"white"],[4,8,"white"],[4,9,"redsquare"],[4,10,"white"],[5,0,"redsquare"],[5,1,"blackhubnumber4"],[5,2,"white"],[5,4,"white"],[5,5,"blackhubnumber4"],[5,6,"white"],[5,8,"white"],[5,9,"blackhubnumber4"],[5,10,"white"],[6,0,"white"],[6,1,"white"],[6,2,"orange9"],[6,4,"white"],[6,5,"white"],[6,6,"blue0"],[6,8,"white"],[6,9,"white"],[6,10,"orange9"],[8,0,"white"],[8,1,"violetsquare"],[8,2,"white"],[9,0,"white"],[9,1,"blackhubnumber4"],[9,2,"white"],[10,0,"white"],[10,1,"white"],[10,2,"blue9"]], 10], 
[6, 'Back to Front', [ 8, 11, 15, 19, 23],  'Identify and press the letter sequence that forms a word in a typical dictionary when reversed. Press OK to confirm your selection (shown by >), or else change it.', [[1,1,"blueS"],[1,2,"blueL"],[1,3,"blueW"],[1,4,"blueA"],[1,5,"blueR"],[1,6,"blueD"],[2,1,"blueN"],[2,2,"blueA"],[2,3,"blueI"],[2,4,"blueT"],[2,5,"blueE"],[2,6,"blueD"],[3,1,"blueE"],[3,2,"blueD"],[3,3,"blueB"],[3,4,"blueB"],[3,5,"blueA"],[3,6,"blueD"],[4,1,"blueD"],[4,2,"blueE"],[4,3,"blueK"],[4,4,"blueL"],[4,5,"blueA"],[4,6,"blueF"],[5,1,"blueY"],[5,2,"blueO"],[5,3,"blueS"],[5,4,"blueO"],[5,5,"blueH"],[5,6,"blueC"], [10,5,"ok"]], 12], 
[7, 'Iconic Memories', [4, 5, 6, 7, 8], 'You will first see on the second row down a sequence of images.  The countdown starts immediately, and you should try to remember the order of the images.', [[1,5,"icon3"],[1,6,"icon8"],[1,7,"icon9"],[1,8,"icon6"],[1,9,"icon7"]], 6], 
[8, 'Colour Confusion', [5, 7, 9, 13, 15], 'Words are listed, each the name of one of the colours RED, ORANGE, BLUE or VIOLET.  Their text colours are also these colours - but name/text colour may not match.', [[0,0,"white"],[0,1,"white"],[0,2,"white"],[0,3,"white"],[0,4,"white"],[0,5,"white"],[0,6,"blueR"],[0,7,"blueE"],[0,8,"blueD"],[0,9,"white"],[0,10,"white"],[1,0,"white"],[1,1,"white"],[1,2,"white"],[1,3,"redO"],[1,4,"redR"],[1,5,"redA"],[1,6,"redN"],[1,7,"redG"],[1,8,"redE"],[1,9,"white"],[1,10,"white"],[2,0,"white"],[2,1,"white"],[2,2,"white"],[2,3,"orangeV"],[2,4,"orangeI"],[2,5,"orangeO"],[2,6,"orangeL"],[2,7,"orangeE"],[2,8,"orangeT"],[2,9,"white"],[2,10,"white"],[3,0,"white"],[3,1,"white"],[3,2,"white"],[3,3,"white"],[3,4,"white"],[3,5,"redB"],[3,6,"redL"],[3,7,"redU"],[3,8,"redE"],[3,9,"white"],[3,10,"white"],[4,0,"white"],[4,1,"white"],[4,2,"white"],[4,3,"violetV"],[4,4,"violetI"],[4,5,"violetO"],[4,6,"violetL"],[4,7,"violetE"],[4,8,"violetT"],[4,9,"white"],[4,10,"white"],[5,0,"white"],[5,1,"white"],[5,2,"white"],[5,3,"white"],[5,4,"white"],[5,5,"white"],[5,6,"blueR"],[5,7,"blueE"],[5,8,"blueD"],[5,9,"white"],[5,10,"white"],[6,0,"white"],[6,1,"white"],[6,2,"white"],[6,3,"orangeO"],[6,4,"orangeR"],[6,5,"orangeA"],[6,6,"orangeN"],[6,7,"orangeG"],[6,8,"orangeE"],[6,9,"white"],[6,10,"white"],[10,2,"red"],[10,4,"orange"],[10,6,"blue"],[10,8,"violet"]], 15], 
[9, 'Probability', [ 12, 16, 20, 24, 28], 'Press the number on the right with the highest probability of being the sum of one randomly-drawn blue tile and one randomly-drawn green tile.', [[0,8,"white"],[0,9,"white"],[0,10,"white"],[1,2,"lightbluetile7"],[1,5,"lightgreentile9"],[1,8,"white"],[1,9,"white"],[1,10,"white"],[2,2,"lightbluetile6"],[2,5,"lightgreentile7"],[2,8,"blue1"],[2,9,"blue3"],[2,10,"white"],[3,2,"lightbluetile8"],[3,5,"lightgreentile6"],[3,8,"white"],[3,9,"white"],[3,10,"white"],[4,2,"lightbluetile1"],[4,5,"lightgreentile7"],[4,8,"blue1"],[4,9,"blue0"],[4,10,"white"],[5,8,"white"],[5,9,"white"],[5,10,"white"],[6,8,"white"],[6,9,"blue8"],[6,10,"white"],[7,8,"white"],[7,9,"white"],[7,10,"white"],[8,8,"white"],[8,9,"blue7"],[8,10,"white"],[9,8,"white"],[9,9,"white"],[9,10,"white"],[10,8,"white"],[10,9,"white"],[10,10,"white"]], 10], 
[10, 'Picnic', [8, 12, 16, 20, 24],  'Required items are shown at the bottom. Starting at the top, press and collect an item from each row in turn (moving vertically or diagonally) ending next to the chequered area.', [[0,1,"picnic8"],[0,2,"picnic4"],[0,3,"picnic2"],[0,4,"picnic9"],[0,5,"picnic1"],[0,6,"picnic7"],[0,7,"picnic6"],[0,8,"picnic5"],[0,9,"picnic3"],[1,1,"picnic8"],[1,2,"picnic1"],[1,3,"picnic2"],[1,4,"picnic4"],[1,5,"picnic7"],[1,6,"picnic3"],[1,7,"picnic9"],[1,8,"picnic5"],[1,9,"picnic6"],[2,1,"picnic3"],[2,2,"picnic7"],[2,3,"picnic6"],[2,4,"picnic4"],[2,5,"picnic8"],[2,6,"picnic9"],[2,7,"picnic2"],[2,8,"picnic1"],[2,9,"picnic5"],[3,1,"picnic6"],[3,2,"picnic1"],[3,3,"picnic9"],[3,4,"picnic2"],[3,5,"picnic7"],[3,6,"picnic5"],[3,7,"picnic3"],[3,8,"picnic8"],[3,9,"picnic4"],[4,4,"tablecloth"],[4,5,"tablecloth"],[4,6,"tablecloth"],[6,3,"picnicunknown"],[6,4,"picnic5"],[6,5,"picnic8"],[6,6,"picnic9"],[10,5,"backuparrow"]], 10]
]

var thescores=[0,0,0,0,0,0,0,0,0,0,0]
var exerciseorder=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var theprofiles  // [ [[Exercise level, Time allowed, Max score this level],.....], Max overall score current profile, Max score ever]
var thecurrentuser
var isnewprofile=0
var thedefaultlevel=2

function setdefaultprofile()
{
var someprofile=[]
theprofiles=[]
var someexercise
var sometime
for (var i=0; i<exerciseorder.length; i++)
{
someexercise=exerciseorder[i]
sometime=exercises[someexercise][2][thedefaultlevel-1]
someprofile[i]=[thedefaultlevel, sometime, 0]
}

theprofiles[0]=[someprofile, 0, 0]
updateprofilecookie()
}

function startupprofile()
{ 
thecurrentuser=0
var someprofiles=GetLocalVal('bprofiles')
if (someprofiles==null || someprofiles.length<5) 
{
setdefaultprofile()
isnewprofile=1
}
else
{
loadprofiles()
}
}

function loadprofiles()
{
theprofiles=eval(GetLocalVal('bprofiles'))

}

function updateprofilecookie()
{
var someprofile=[]
var someprofiles=[]
var sometext
for (var j=0; j<theprofiles.length; j++)
{
someprofile=[]
for (var i=0; i<theprofiles[j][0].length; i++)
{
someprofile[i]='['+theprofiles[j][0][i]+']'
}

someprofiles[j]='[['+someprofile+'],'+theprofiles[j][1]+','+theprofiles[j][2]+']'
}
// alert('['+someprofiles+']')
SetLocalVal('bprofiles', '['+someprofiles+']')
}



startupprofile()

