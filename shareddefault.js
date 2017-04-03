// All code copyright of TopAccolades Limited
// Original brain-training exercises by Dr. David Wolstenholme


var theprofiles  =parent.theprofiles
var thecurrentuser=parent.thecurrentuser



var height=11
var width=11

function gettextvalue(someid)
{
return document.getElementById(someid).innerHTML

}

function writescreen(somelist)
{
clearscreen()
for (var i=0; i<somelist.length; i++)
{
changepiece(somelist[i][0], somelist[i][1], somelist[i][2])
}
}

function slightlymutated(somelist1)
{
var somelist=copysimplevalues(somelist1)

var somemax=somelist.length-2
var i=randomnumber(somemax)
if (somelist[i]!=somelist[i+1])
{
var somechar=somelist[i]
somelist[i]=somelist[i+1]
somelist[i+1]=somechar
return somelist
}
else
{
return slightlymutated(somelist1)
}

}

function listismember(somelist, somearray)
{
var somereturn
for (var i=0; i<somearray.length; i++)
{
somereturn=true
for (var j=0; j<somelist.length; j++)
{
if (somelist[j]!=somearray[i][j]) {somereturn=false; break}
}
if (somereturn==true) {return true}

}
return false
}

function charlist(somestring)
{
var someresult=[]
if (somestring.length==0) {return []} else
{return [somestring.substring(0, 1)].concat(charlist(somestring.substring(1)))}
}

function differentjumble(somelist)
{
var somemix=shufflearray(somelist)
var somecheck=0
for (var i=0; i<somelist.length; i++)
{
if (somelist[i]!=somemix[i]) {somecheck++}
}
if (somecheck>=3) {return somemix} else {return differentjumble(somelist)}
}

function ith(someitem, somelist)
{
for (var i=0; i<somelist.length; i++)
{
if (someitem==somelist[i]) {return i}
}
}

function randomnumber(num) {
// returns a random number from 1 to num
var ran=Math.round(Math.random()*num)
if (ran == 0) {ran = num}  // ran initially 0 to num - but 0 and num have half the probability of the other numbers
return ran
}

function randominrange(num1, num2)
{
// num2 >=num1
var somediff=num2-num1
var somerand=randomnumber(somediff+1)
return (num1-1)+somerand
}

function differentrandomnumber(somen, somecheck)
{
var somerandom=randomnumber(somen)
if (somerandom!=somecheck) {return somerandom} else {return differentrandomnumber(somen, somecheck)}
}

function shufflearray(somearray)
{

var temparray=somearray
var shuffled=[]
packsize=somearray.length
var ran
var i
for (var i=0; i<packsize; i++)
{
ran = randomnumber(temparray.length)
shuffled[i] = temparray[ran-1]
temparray = removeElement(ran-1, temparray)
}
return shuffled
}

function removeElement(index, somearray)
{
var beg=somearray.slice(0, index)
var end=[]
if (index+1 < somearray.length) {end = somearray.slice(index+1)}
return beg.concat(end)
}




function tailarray(somearray)
{
return somearray.slice(1, somearray.length)
}

function headarray(somearray)
{
return somearray[0]
}



function empty(array) 
// checks whether an array is empty:  returns true if so, false if not.
{
if (array.length == 0)
     return true  
else
     return false

}

function member(element, array) 
// checks whether element is a member of array:  returns true if so, false if not.
{
var check = false
var i = 0
while (i<array.length && !check){check = array[i]==element; i++};
return check

}

function numbersort(some1, some2)
{
return some1-some2
}

function quantitynums(some1, some2)
{
return some2[1]-some1[1]
}

function makestring(somelist)
{
var somereturn=''
for (var i=0; i<somelist.length; i++)
{
somereturn=somereturn+somelist[i]
}
return somereturn
}

function gifname(row, col)
{
return screenrecord[row][col]

}


function cellindices()
{
var somecells=[]
var someindex=0
for (var i=0; i<height; i++)
{
for (var j=0; j<width; j++)
{
somecells[someindex]=[i, j]
someindex++
}

}
return somecells
}

var exercisenumber=0
var subexercisenumber=0
var exercisescore=0
var exercisescoreposs=0
var totalscore=0
var totalscoreposs=0
var order=[]
var clicksexpected=0
var clicksaccepted=0
var validcells=[]
var orderoriginal=[]
var goal=[]
var answergiven=[]

function showcontexthelp()
{
var newwin=window.open('help.htm#exercise'+exercisenumber,'', 'toolbar=yes,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes')
newwin.document.close()

}

var exercisestate='notrunning'
var exercises=parent.exercises

var exerciseordernumber=0
var exerciseorder=parent.exerciseorder



var thecolours=['red', 'orange', 'blue', 'violet']
var theletters=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var thenumerals=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
var thenumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9] 

function showerror(row, col)
{
if (exercisestate=="selecting")
{
var somereplacegif=gifname(row, col)
changepiece(row, col, 'error')
if (responsetimer != null) {clearTimeout(responsetimer)}
responsetimer= setTimeout('changepiece('+row+', '+col+', "'+somereplacegif+'")', 200)
}

}
var scalefcell=scalef*1.25  // this is because new base cell size is 20 but all dimensions in images are based on size of 16
var cellsize=Math.floor(scalefcell*16)
var thetotalsize=height*cellsize
var screenrecord=[]
function setupboard()
{

var piecename
var sometotalsize=height*cellsize
document.write('<div style="position:relative;left:0px;top:0px;width:'+thetotalsize+'px;height:'+(thetotalsize)+'px;background-color:white;">')

for (var i=0; i<height; i++)
{
screenrecord[i]=[]
for (var j=0; j<width; j++)
{

piecename='piece'+i+'_'+j
document.write('<div id="gridback'+i+'_'+j+'" style="position:absolute;left:'+((j*cellsize))+'px;top:'+((i*cellsize))+'px;height:'+cellsize+'px;width:'+cellsize+'px;font-weight:bold;text-align:center;vertical-align:middle;background-color:black"><table border=0 cellspacing=0 cellpadding=0><tr><td align=center valign=middle id="'+piecename+'" style="width:'+cellsize+'px;height:'+cellsize+'px;font-size:'+Math.floor(scalefcell*14)+'px;font-weight:bold;color:black;text-align:center" onClick="selectpiece('+i+', '+j+')" >&nbsp;</td></tr></table></div>')
screenrecord[i][j]='black'
}
}


document.write('</div>')
}

function clearscreen()
{
for (var i=0; i<height; i++)
{
for (var j=0; j<width; j++)
{
changepiece(i,j,'black')
}
}
if (document.getElementById('thegame').style.display=='inline')
{
document.getElementById('thegame').style.display='none'
document.getElementById('thegame').style.display='inline'
}
}

function changetextvalue(someitem, someval)
{

document.getElementById(someitem).innerHTML = someval

}



function selectpiece(rowi, colj)
{
if (exerciseordernumber>0)
{
if (runcheck()!=true) {return}
}

eval('selectpiece'+exercisenumber+'('+rowi+', '+colj+')')

}

var thescores=parent.thescores

function go2()
{
if (document.getElementById('addivtotal').style.display=='none')
{
go()
}

}

function go()
{

if (responsetimer != null) {clearTimeout(responsetimer)}
if (countdowntimer != null) {clearTimeout(countdowntimer)}
exercisestate='notrunning'
if (exerciseordernumber==11)
{
exerciseordernumber=0
// setupexercise(0)
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)

/*
exerciseordernumber=0
setupexercise(0)
*/
}
else
{
if (exerciseordernumber==0 || subexercisenumber==numberexercisesperset)
{
if (exerciseordernumber>0)
{
updatescores()
}
exerciseordernumber++
// eval('setupexercise('+exerciseorder[exerciseordernumber]+')')
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)
}
else
{
exercisescoreposs=subexercisenumber
totalscoreposs=numberexercisesperset*(exerciseordernumber-1)+exercisescoreposs
changetextvalue("exercisescoreposs", exercisescoreposs)
changetextvalue("totalscoreposs", totalscoreposs)
eval('setupsubexercise'+exercisenumber+'()')
}
}
}


function updatescores()
{
thescores[exerciseordernumber]=exercisescore

}

function gonext()
{
if (responsetimer != null) {clearTimeout(responsetimer)}
if (countdowntimer != null) {clearTimeout(countdowntimer)}
exercisestate='notrunning'
if (exerciseordernumber==11)
{
exerciseordernumber=0
// setupexercise(0)
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)

}
else
{
if (exerciseordernumber>0)
{
updatescores()
}
exerciseordernumber++
// eval('setupexercise('+exerciseorder[exerciseordernumber]+')')
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)

}
}


function goback()
{
if (responsetimer != null) {clearTimeout(responsetimer)}
if (countdowntimer != null) {clearTimeout(countdowntimer)}
exercisestate='notrunning'

if (exerciseordernumber==12) // now want to go back to 10 from 11
{
exerciseordernumber=0
// setupexercise(0)
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)

}
else
{
if (subexercisenumber==0 && exerciseordernumber>0) {thescores[exerciseordernumber-1]=0; exerciseordernumber--; }
// eval('setupexercise('+exerciseorder[exerciseordernumber]+')')
var somenextexercise='exercise'+exerciseordernumber
changepage(somenextexercise)

}
}


var exerciselevel=1
function changeexerciselevel(someval)
{
if (exercisestate=='notrunning'  && exerciseordernumber==0 && document.getElementById("exerciselevel").innerHTML!='')
{
var somenewlevel=parent.thedefaultlevel+someval
if (somenewlevel==6) {somenewlevel=5}
if (somenewlevel==0) {somenewlevel=1}
changetextvalue("exereciselevel", somenewlevel)
parent.thedefaultlevel=somenewlevel
parent.setdefaultprofile()
}


if (exercisestate=='notrunning'  && exerciseordernumber>0 && exerciseordernumber<=10)
{
var somenewlevel=exerciselevel+someval
if (somenewlevel==6) {somenewlevel=5}
if (somenewlevel==0) {somenewlevel=1}
exerciselevel=somenewlevel
changetextvalue("exerciselevel", exerciselevel)
basetimeavailable=exercises[exercisenumber][2][exerciselevel-1]
changetextvalue("basetimeavailable", basetimeavailable)
setexerciseprofile()
}
}


var basetimeavailable=1
var timeavailable
function changetimeavailable(someval)
{
if (exercisestate=='notrunning' && exerciseordernumber>0 && exerciseordernumber<=10)
{
if (basetimeavailable!='')
{
var somenewtime=basetimeavailable+someval
if (somenewtime==0) {somenewtime=1}
if (somenewtime==100) {somenewtime=99}
basetimeavailable=somenewtime
changetextvalue("basetimeavailable", basetimeavailable)
setexerciseprofile()
}
}
}



function setexerciseprofile()
{
theprofiles[thecurrentuser][0][exerciseordernumber][0]=exerciselevel
theprofiles[thecurrentuser][0][exerciseordernumber][1]=basetimeavailable
theprofiles[thecurrentuser][0][exerciseordernumber][2]=0
theprofiles[thecurrentuser][1]=0
parent.theprofiles=theprofiles
parent.updateprofilecookie()
}

var responsetimer
var countdowntimer
function startcountdown()
{
timeavailable=basetimeavailable
var somesecs=Math.floor(timeavailable)
var somedecimal=10*(timeavailable-somesecs)
changetextvalue("timeavailable", somesecs+'.'+somedecimal)
changetextvalue("timeavailable2", somesecs+'.'+somedecimal)

if (countdowntimer != null) {clearTimeout(countdowntimer)}

countdowntimer= setTimeout('countdown()', 100)

}

var countdownend='normal'
function countdown()
{
timeavailable=(10*timeavailable-1)/10
var somesecs=Math.floor(timeavailable)
var somedecimal=Math.round(10*(timeavailable-somesecs))
changetextvalue("timeavailable", somesecs+'.'+somedecimal)
changetextvalue("timeavailable2", somesecs+'.'+somedecimal)
if (timeavailable>0) 
{
if (countdowntimer != null) {clearTimeout(countdowntimer)}

countdowntimer= setTimeout('countdown()', 100)

}
else
{
countdownend='normal'
eval('finish'+exercisenumber+'()')
}

}

function stopcountdownearly()
{
countdownend='early'

clearTimeout(countdowntimer)
eval('finish'+exercisenumber+'()')
}


function copyvalues(somearray)
{
var temparray=[]
for (var i=0; i<somearray.length; i++)
{
temparray[i]=[]
for (var j=0; j<somearray[i].length; j++)
{
temparray[i][j]=somearray[i][j]
}
}
return temparray
}


function copysimplevalues(somearray)
{
var temparray=[]
for (var i=0; i<somearray.length; i++)
{
temparray[i]=somearray[i]
}
return temparray
}

function showexercisewelcome()
{
var somen=exercisenumber
if (somen<10) {somechars=[somen+'']} else {somechars=twochars(somen)}
somelist=[]

for (var i=0; i<somechars.length; i++)
{
somelist[i]=[ 7, 5+i, 'blackyellow'+somechars[i]]
}
somelist=[[1, 2, 'blackyellowW'], [1, 3, 'blackyellowE'], [1, 4, 'blackyellowL'], [1, 5, 'blackyellowC'], [1, 6, 'blackyellowO'], [1, 7, 'blackyellowM'], [1, 8, 'blackyellowE'], [3, 5, 'blackyellowT'], [3, 6, 'blackyellowO'], [5, 2, 'blackyellowE'], [5, 3, 'blackyellowX'], [5, 4, 'blackyellowE'], [5, 5, 'blackyellowR'], [5, 6, 'blackyellowC'], [5, 7, 'blackyellowI'],  [5, 8, 'blackyellowS'], [5, 9, 'blackyellowE']].concat(somelist).concat([[9, 4, 'blackredD'], [9, 5, 'blackredE'], [9, 6, 'blackredM'], [9, 7, 'blackredO']])
writescreen(somelist)    
}

function showexample()
{
changetextvalue("exercisedescription", exercises[exercisenumber][3])

writescreen(exercises[exercisenumber][4])

if (responsetimer != null) {clearTimeout(responsetimer)}

responsetimer= setTimeout("eval('subsidiarysetupexercise'+exercisenumber+'()')", 1000*exercises[exercisenumber][5])

}


function setupexercise(somen)
{
exercisestate='notrunning'
if (somen<=10)
{
subexercisenumber=0
exercisescore=0
exercisescoreposs=0
exerciseordernumber=somen
exercisenumber=somen
subexercisenumber=0
exerciselevel=theprofiles[thecurrentuser][0][exercisenumber][0]
basetimeavailable=theprofiles[thecurrentuser][0][exercisenumber][1]
timeavailable=''
totalscore=0
totalscoreposs=numberexercisesperset*(somen-1); if (totalscoreposs<0) {totalscoreposs=0}
for (var i=somen; i<thescores.length; i++)
{
thescores[i]=0
}
for (var i=1; i<thescores.length; i++)
{
totalscore=totalscore+thescores[i]
}
changetextvalue("exercisedescription", 'If you\'re familiar with these exercises, [Go]<br><br>')
if (exerciseordernumber>0) {changetextvalue("exerciselevel", exerciselevel)} else {changetextvalue("exerciselevel",'')}
if (exerciseordernumber>0) {changetextvalue("basetimeavailable", basetimeavailable)} else {changetextvalue("basetimeavailable", '')}
changetextvalue("timeavailable", '')
changetextvalue("timeavailable2", '')
if (exerciseordernumber>0) {changetextvalue("exerciseordernumber", exerciseordernumber)} else {changetextvalue("exerciseordernumber", '')}
changetextvalue("subexercisenumber", '')
changetextvalue("exercisescore", exercisescore)
changetextvalue("exercisescoreposs", exercisescoreposs)
changetextvalue("totalscore", totalscore)
changetextvalue("totalscore2", totalscore)

changetextvalue("totalscoreposs", totalscoreposs)
thewordsused=[]
if (somen>0)
{
showexercisewelcome()

if (responsetimer != null) {clearTimeout(responsetimer)}

responsetimer= setTimeout("showexample()", 2000)
}
else
{
showexample()
}
}
else // moving to scores/profiles
{
handlescoresandprofile()
}


}


function twochars(somenum)
{
if (somenum<10) {return [' ', somenum+'']}
else
{
return charlist(somenum+'')
}
}




var originalimagenames=['blackadd', 'blacksubtract', 'blackmultiply', 'blackdivide', 'blackequals', /* 'icon0', 'icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7', 'icon8', 'icon9', */ 'blackhub', 'correctblackhub', 'wrongblackhub', 'lightbluetilespace', 'greyhub']
var newimagenames=['black+', 'black-', 'blackx', 'black÷', 'black=', /* 'redsquare', 'bluesquare', 'orangesquare', 'violetsquare', 'reddot', 'orangedot', 'bluedot', 'violetdot', 'greendot', 'greensquare', */ 'black', 'blackcorrect', 'blackwrong', 'lightbluetile ', 'gray']

function setthepiece(row, col, someimage)
{
var somechar
somepiece='piece'+row+'_'+col
somebg='gridback'+row+'_'+col
var someborder=Math.floor(scalefcell*1)
if (member(someimage, ['black', 'white', 'red', 'violet', 'yellow', 'blue', 'green', 'orange', 'gray'])==true)
{
document.getElementById(somebg).style.backgroundColor=someimage
document.getElementById(somepiece).innerHTML = ''
return
}
var somecol=someimage.slice(0, someimage.length-1)
if (member(somecol, ['red', 'black', 'violet', 'yellow', 'blue', 'green', 'orange', 'gray'])==true)
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color=somecol
document.getElementById(somepiece).innerHTML = someimage.slice(someimage.length-1)

return
}
if (member(somecol, ['blackred',  'blackviolet', 'blackyellow', 'blackblue', 'blackgreen', 'blackorange', 'blackgray', 'blackwhite'])==true)
{
somecol=somecol.slice(5)
document.getElementById(somebg).style.backgroundColor='black'
document.getElementById(somepiece).style.color=somecol
somechar=someimage.slice(someimage.length-1)
if (somechar=='>') {somechar='&gt;'}
if (somechar=='<') {somechar='&lt;'}

document.getElementById(somepiece).innerHTML = somechar
return
}
if (somecol=='inverse')
{
document.getElementById(somebg).style.backgroundColor='red'
document.getElementById(somepiece).style.color='black'
document.getElementById(somepiece).innerHTML = someimage.slice(someimage.length-1)

return
}
if (somecol=='button')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='red'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;background-color:black;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+someborder+'px;left:'+someborder+'px;width:'+(Math.floor(scalefcell*16)-2*someborder)+'px;height:'+(Math.floor(scalefcell*16)-2*someborder)+'px;background-color:white;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div><div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;text-align:center">'+someimage.slice(someimage.length-1)+'</div>'
return

}
if (somecol=='lightgreentile')
{
document.getElementById(somebg).style.backgroundColor='limegreen'
document.getElementById(somepiece).style.color='black'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;background-color:black;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+someborder+'px;left:'+someborder+'px;width:'+(Math.floor(scalefcell*16)-2*someborder)+'px;height:'+(Math.floor(scalefcell*16)-2*someborder)+'px;background-color:limegreen;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div><div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;text-align:center">'+someimage.slice(someimage.length-1)+'</div>'
return

}
if (somecol=='lightbluetile')
{
document.getElementById(somebg).style.backgroundColor='cyan'
document.getElementById(somepiece).style.color='black'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;background-color:black;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+someborder+'px;left:'+someborder+'px;width:'+(Math.floor(scalefcell*16)-2*someborder)+'px;height:'+(Math.floor(scalefcell*16)-2*someborder)+'px;background-color:cyan;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div><div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;text-align:center">'+someimage.slice(someimage.length-1)+'</div>'
return

}
if (somecol=='blackhubnumber')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='black'
document.getElementById(somepiece).innerHTML = '<span style="font-size:'+Math.floor(scalefcell*11)+'px">'+someimage.slice(someimage.length-1)+'</span>'
return

}
if (somecol=='correctblackhubnumber')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='silver'
document.getElementById(somepiece).innerHTML = '<span style="font-size:'+Math.floor(scalefcell*11)+'px">'+someimage.slice(someimage.length-1)+'</span>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*6)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*5)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*7)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*8)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'
return

}
if (somecol=='wrongblackhubnumber')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='silver'
document.getElementById(somepiece).innerHTML = '<span style="font-size:'+Math.floor(scalefcell*11)+'px">'+someimage.slice(someimage.length-1)+'</span>'+'<div style="position:absolute;top:0px;left:'+Math.floor(scalefcell*3)+'px;color:red">X</div>'
return

}
if (someimage=='leftarrow')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='black'
document.getElementById(somepiece).innerHTML = '&lt;'
return

}
if (someimage=='error')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='red'
document.getElementById(somepiece).innerHTML = '!'
return

}
if (someimage=='whitecorrect')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='limegreen'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*6)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*6.3)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*6.6)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*7)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*8)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'
return

}
if (someimage=='whitewrong')
{
document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='red'
document.getElementById(somepiece).innerHTML = 'X'
return

}

if (someimage=='blackcorrect')
{
document.getElementById(somebg).style.backgroundColor='black'
document.getElementById(somepiece).style.color='limegreen'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*6)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:'+Math.floor(scalefcell*5)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*10)+'px;font-weight:bold">\\</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*7)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-1)+'px;left:'+Math.floor(scalefcell*8)+'px;color:limegreen;font-size:'+Math.floor(scalefcell*16)+'px;font-weight:bold">/</div>'
return

}
if (someimage=='blackwrong')
{
document.getElementById(somebg).style.backgroundColor='black'
document.getElementById(somepiece).style.color='red'
document.getElementById(somepiece).innerHTML = 'X'
return

}
if (someimage=='ok')
{

document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='green'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;background-color:black;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+someborder+'px;left:'+someborder+'px;width:'+(Math.floor(scalefcell*16)-2*someborder)+'px;height:'+(Math.floor(scalefcell*16)-2*someborder)+'px;background-color:white;font-size:'+Math.floor(scalefcell*6)+'px"><table border=0 cellpadding=0 cellspacing=0 width='+(Math.floor(scalefcell*16)-2*someborder)+' height='+(Math.floor(scalefcell*16)-2*someborder)+'><tr><td align=center valign=middle style="font-weight:bold;text-align:center;color:green;font-size:'+Math.floor(scalefcell*10)+'px">OK</td></tr></table></div>'



return
}
if (someimage=='orangeok')
{

document.getElementById(somebg).style.backgroundColor='orange'
document.getElementById(somepiece).style.color='black'
// document.getElementById(somepiece).innerHTML ='<div style="position:absolute;top:0px;left:'+Math.floor(scalefcell*1)+'px;color:black;font-size:'+Math.floor(scalefcell*10)+'px">OK</div>'
document.getElementById(somepiece).innerHTML ='<span style="font-size:'+Math.floor(scalefcell*10)+'px">OK</span>'

return
}
if (someimage=='buttonplusminus')
{

document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color='red'
document.getElementById(somepiece).innerHTML = '<div style="position:absolute;top:0px;left:0px;width:'+Math.floor(scalefcell*16)+'px;height:'+Math.floor(scalefcell*16)+'px;background-color:black;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+someborder+'px;left:'+someborder+'px;width:'+(Math.floor(scalefcell*16)-2*someborder)+'px;height:'+(Math.floor(scalefcell*16)-2*someborder)+'px;background-color:white;font-size:'+Math.floor(scalefcell*6)+'px">&nbsp;</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*-2)+'px;left:'+Math.floor(scalefcell*2)+'px;color:red;font-size:'+Math.floor(scalefcell*14)+'px">+</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*5)+'px;left:'+Math.floor(scalefcell*8)+'px;color:red;font-size:'+Math.floor(scalefcell*8)+'px">/</div>'+'<div style="position:absolute;top:'+Math.floor(scalefcell*3)+'px;left:'+Math.floor(scalefcell*9)+'px;color:red;font-size:'+Math.floor(scalefcell*14)+'px">-</div>'



return
}
if (someimage=='greyline')
{
document.getElementById(somebg).style.backgroundColor='black'
document.getElementById(somepiece).innerHTML = '<table style="position:absolute;top:'+Math.floor(scalefcell*4)+'px;left:0px;width:'+(cellsize)+'px;height:'+(cellsize-Math.floor(scalefcell*8))+'px;background-color:silver"><tr><td></td></tr></table>'

return
}

if (member(someimage, ['redsquare', 'bluesquare', 'yellowsquare', 'violetsquare', 'blacksquare', 'greensquare', 'orangesquare'])==true)
{
var somelength=someimage.length
var somecollength=somelength-6
somecol=someimage.slice(0,somecollength)

var somebordersize=Math.floor(scalefcell*2)
var somesquaresize=cellsize-2*somebordersize

document.getElementById(somebg).style.backgroundColor='white'

document.getElementById(somepiece).innerHTML = '<table style="position:absolute;top:'+somebordersize+'px;left:'+somebordersize+'px;width:'+somesquaresize+'px;height:'+somesquaresize+'px;background-color:'+somecol+'"><tr><td></td></tr></table>'

return
}
if (member(someimage, ['reddot', 'bluedot', 'yellowdot', 'violetdot', 'blackdot', 'greendot', 'orangedot'])==true)
{
var somelength=someimage.length
var somecollength=somelength-3
somecol=someimage.slice(0,somecollength)

var somebordersize=Math.floor(scalefcell*2)
var somesquaresize=cellsize-2*somebordersize
var someminorsquaresize=Math.floor(scalefcell*4)
var someminordimension=somesquaresize-2*someminorsquaresize

document.getElementById(somebg).style.backgroundColor='white'
document.getElementById(somepiece).style.color=somecol
document.getElementById(somepiece).innerHTML = '<table style="position:absolute;top:'+somebordersize+'px;left:'+(somebordersize+someminorsquaresize)+'px;width:'+someminordimension+'px;height:'+somesquaresize+'px;background-color:'+somecol+'"><tr><td></td></tr></table>'+'<table style="position:absolute;top:'+(somebordersize+someminorsquaresize)+'px;left:'+somebordersize+'px;width:'+somesquaresize+'px;height:'+someminordimension+'px;background-color:'+somecol+'""><tr><td></td></tr></table>'
return
}

var somei=ith(someimage, originalimagenames)
if (somei>=0) {setthepiece(row, col, newimagenames[somei]); return}
document.getElementById(somepiece).innerHTML = '<img border=0 width='+cellsize+'px height='+cellsize+'px style="display:block" src="'+someimage+'.gif">'


} 

function changepiece(row, col, someimage)
{

setthepiece(row, col, someimage)
screenrecord[row][col]=someimage
}



var thedivs=['maingame', 'more']
function displaydiv(somediv)
{
for (var i=0; i<thedivs.length; i++)
{
document.getElementById(thedivs[i]).style.display = 'none'


}
document.getElementById(thedivs[somediv]).style.display = 'inline'

}

function startingreminder()
{
changetextvalue("exercisedescription", document.getElementById("exercisedescription").innerHTML+' [Go]')
}
