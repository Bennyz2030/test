$(document).ready(function() {
  let sentence = prompt("Enter a sentence: ");
let rest = sentence.slice(1);
let capital = sentence.charAt(0).toUpperCase();
function output(rest, capital) {
	return capital + rest;
}
  alert(output(rest, capital));
  
}