function scuberGreetingForFeet(feet){
  let greeting;  

  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    greeting = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }

  return greeting;
}

function ternaryCheckCity(city){
  let message;

  if (city === 'NYC') {  // remember to use COMPARISON operator (===)
    message = "Ok, sounds good.";
  } else {
    message = "No go.";
  }

  return message;
}

function switchOnCharmFromTip(tip){
  let quote;

  switch (tip) { // Switch Statement 
    case 'generous':
      quote = 'Thank you so much.';
      break;
    case 'not as generous':
      quote = 'Thank you.';
      break;
    default:
      quote = 'Bye.';
      break;
  }

  return quote;
}