'use strict';
var RESULTS = ['No', 'Low', 'High'];
var ieee1789 = function(frequency, modulation) {
  if (frequency < 90) {
    if (modulation < 0.01 * frequency) {
      return 0;
    }
    if (modulation < 0.025 * frequency) {
      return 1;
    }
    return 2;
  }
  if (frequency < 1250) {
    if (modulation < 0.0333 * frequency) {
      return 0;
    }
    if (modulation < 0.08 * frequency) {
      return 1;
    }
    return 2;
  }
  if (frequency < 3000) {
    if (modulation < 0.0333 * frequency) {
      return 0;
    }
    return 1;
  }
  return 0;
};
var bodyDivision = (function() {
  var elements = document.getElementsByTagName('div');
  for (var i = 0; i < elements.length; ++i) {
    if (elements[i].className === 'body') {
      return elements[i];
    }
  }
})();
var frequencyInput = document.getElementById('frequency');
var modulationInput = document.getElementById('modulation');
var calculateButton = document.getElementsByTagName('button')[0];
calculateButton.onclick = function() {
  var result = ieee1789(+frequencyInput.value, +modulationInput.value);
  var resultString = RESULTS[result] + ' risk';
  var next = calculateButton.nextSibling;
  if (next && next.nodeType === 3) {
    bodyDivision.removeChild(next);
  }
  var textNode = document.createTextNode(resultString);
  bodyDivision.insertBefore(textNode, calculateButton.nextSibling);
};
var onKeyUp = function(e) {
  e = e || window.event;
  if (e.key === 'Enter' || e.keyCode === 13) {
    calculateButton.click();
  }
};
frequencyInput.onkeyup = onKeyUp;
modulationInput.onkeyup = onKeyUp;
