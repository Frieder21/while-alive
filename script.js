var forInLifeDict = {"drink":['"water", 3L',''], "eat":['"pizza"',''], "code":[], "question":["gender", "sexuality", ''], "sleep":["6h", "30min", "5h", ''], 'watch':['"Grimgar of Fantasy and Ash"','"Riddle Story of Devil"','"Orange"']}
var deadDict = {"die":['"lonely"','"with family"', '"with five cats"', '']}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setHTML(keys, dict, int) {
  document.getElementById(keys[int]).textContent = dict[keys[int]][getRandomInt(dict[keys[int]].length)];
}

function addToHTML(dict, id, spaces, repeat) {
  var keys = Object.keys(dict)
  for (var i in keys) {
    document.getElementById(id).innerHTML += '<p><span class=green-text>'+ '&nbsp'.repeat(spaces) + keys[i] + '</span><span class="white-text">(</span><span class="pink-text" id=' + keys[i] + '></span><span class="white-text">)</span></p>\n';
    if (dict[keys[i]].length > 0) {
      setHTML(keys, dict, i);
      setInterval(setHTML(keys, dict, i), repeat);
    }
  }
}

function contentLoaded() {
  addToHTML(forInLifeDict, "forInLife", 8, 200);
  addToHTML(deadDict, "dead", 0, 1900);
}

document.addEventListener('DOMContentLoaded', contentLoaded, false);
