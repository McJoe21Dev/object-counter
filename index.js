function element(id){
  return document.getElementById(id)
}

function go(){
  
  var data = {
    n: Number(element('number').value),
    l: Number(element('limit').value),
    s: element('suffix').value
  }
  
  run(data.n, data.l, data.s)
  //if (data.n != 0 & data.l != 0 data.s.length != 0){
    //run(data.n, data.l, data.s)
  //}
}
function run(number, limit, suffix) {
  var n = number
  
  for (var i = 0; i < limit; i++) {
    document.write('<br/>'+n+' '+suffix)
    n += number
  }
  
  document.write('<br/><br/><button onclick="location.reload()">Start Again</button>')
}