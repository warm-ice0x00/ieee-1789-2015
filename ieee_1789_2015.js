'use strict';
var ieee1789 = function(frequency, modulation) {
  if (frequency < 90) {
    if (modulation < 0.01 * frequency) {
      return 0;
    } else if (modulation < 0.025 * frequency) {
      return 1;
    } else {
      return 2;
    }
  } else if (frequency < 1250) {
    if (modulation < 0.0333 * frequency) {
      return 0;
    } else if (modulation < 0.08 * frequency) {
      return 1;
    } else {
      return 2;
    }
  } else if (frequency < 3000) {
    if (modulation < 0.0333 * frequency) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
};
var results = ['No Risk', 'Low Risk', 'High Risk'];
var colors = ['green', 'yellow', 'red'];
var frequencyInput = document.getElementById('frequency');
var modulationInput = document.getElementById('modulation');
var calculateButton = document.getElementById('calculate');
var resultSpan = document.getElementById('result');
calculateButton.onclick = function() {
  var result = ieee1789(+frequencyInput.value, +modulationInput.value);
  resultSpan.style.color = colors[result];
  resultSpan.innerHTML = results[result];
};
frequencyInput.onkeyup = function(e) {
  e = e || window.event;
  if (e.key === 'Enter' || e.keyCode === 13) {
    calculateButton.click();
  }
};
modulationInput.onkeyup = function(e) {
  e = e || window.event;
  if (e.key === 'Enter' || e.keyCode === 13) {
    calculateButton.click();
  }
};
