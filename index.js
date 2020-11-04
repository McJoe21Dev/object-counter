function go(){
  
  var data = {
    n: Number(element('number').value),
    l: Number(element('limit').value),
    s: element('suffix').value
  }
  run(data.n, data.l, data.s)
}

function run(number, limit, suffix) {
  var items = [];
  var n = number;
  var style = '"font-family: Impact ;font-weight: bold;"';

  for (var i = 0; i < limit; i++) {
    items.push(n+' '+suffix)
    n += number
  }
  
  var items2 = items.join('<br/>')
  document.write('<h3 style='+style+'>Object Counter List</h3>')
  document.write('<span style='+style+'>'+items2)
  document.write('<br/><br/><button onclick="location.reload()">Start Again</button>')
}