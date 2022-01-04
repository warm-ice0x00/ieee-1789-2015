var ieee1789 = function(frequency, modulation) {
  if (frequency > 3000) {
    return 0;
  }
  if (frequency < 90) {
    if (modulation < 0.01 * frequency) {
      return 0;
    }
    if (modulation < 0.025 * frequency) {
      return 2;
    }
  }
  if (modulation < 0.0333 * frequency) {
    return 0;
  }
  if (frequency <= 1250 && modulation < 0.08 * frequency) {
    return 1;
  }
  return 2;
};
var results = ['No Risk', 'Low Risk', 'High Risk'];
var colors = ['green', 'yellow', 'red'];
var frequencyInput = $('#frequency');
var modulationInput = $('#modulation');
var calculateButton = $('#calculate');
var resultSpan = $('#result');
calculateButton.click(function() {
  var result = ieee1789(+frequencyInput.val(), +modulationInput.val());
  resultSpan.css('color', colors[result]).html(results[result]);
  calculateButton.focus();
});
$(document).on('touchstart', $.noop);
