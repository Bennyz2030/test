$(document).ready(function() {
  let sentence = prompt("Enter a sentence: ");
  let capital = sentence.charAt(0).toUpperCase();
   let rest = sentence.slice(1, -1);
  let capital2 = sentence.charAt(sentence.length-1).toUpperCase();
  function output(capital, rest, capital2) {
  return capital + rest + capital2;
  } //This capitalizes the first and last letter of the sentence
    alert(output(capital, rest, capital2));
  
}