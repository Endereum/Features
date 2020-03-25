// Global Variable
var randomString;
var globalShareVariable;
var privateInternalVariable;

// Function to generate random number
function makeRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Generating random number
function generateRandomNumber() {
  randomString = makeRandomString(16);

  // Showing Random String in HTML
  $('#random-number-span-display').text(randomString);
  if (AppCall !=== 'undefined') {
    AppCall.postMessage('getVIN');
    globalShareVariable = "From JS Function";
  } else {
    console.debug('Not running inside a Flutter webview');
  }
}

/** Checks variable 2 times in one second */
setTimeout(() => {
  if(globalShareVariable){

    if(globalShareVariable != privateInternalVariable){
      // using id global-variable-display to display global variable
      $('#global-variable-display').text(String(globalShareVariable));

      /** Save global variable to private internal variable
       * for cross check */
      privateInternalVariable = globalShareVariable;
    }
  }
}, 500);