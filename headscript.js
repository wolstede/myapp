function changetextvalue(someitem, someval)
{
document.getElementById(someitem).innerHTML = someval
}

function documentwrite(someitem)
{
document.write(someitem)
}

var screenwidth=window.innerWidth
var screenheight=window.innerHeight

var overallwidthscale=screenwidth/230
var overallheightscale=screenheight/360
if (overallwidthscale<overallheightscale) {scalef=Math.floor(10*overallwidthscale)/10} else {scalef=Math.floor(10*overallheightscale)/10}
if (scalef<1.0) {scalef=1.0}


documentwrite('<style type="text/css">      \nbody {color: black; background-color: white; font-family: sans-serif; font-size: '+(scalef*12)+'px; font-weight: normal; font-style: normal; text-align: left}      \nh1 {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: bold; font-style: normal; text-align: left} \nh2 {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: italic; text-align: left} \np {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; text-align: left} \nli {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; text-align: left} \ntable {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; text-align: left} \ntd {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; } \ntextarea {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; overflow:hidden;} \ninput {font-family: sans-serif; font-size: '+(scalef*10)+'px; font-weight: normal; font-style: normal; } \n</style> \n')
