// Function to generate responses with hardcoded numbers
let hasBeenCalled = false;

function generateResponse(question) {
  let response;

  if (!hasBeenCalled) {
    if (/renewable/i.test(question)) {
      response = "5000.00 MWh";
    } else if (/water pollution/i.test(question)) {
      response = "3000.00 m³";
    } else if (/air pollution/i.test(question)) {
      response = "2000.00 NOx";
    } else if (/gender/i.test(question)) {
      response = "60.00% employees";
    } else if (/net zero/i.test(question)) {
      response = "Target year: 2040";
    } else {
      response = `No data available for ${question}`;
    }
  } else {
    if (/renewable/i.test(question)) {
      response = "6000.00 MWh";
    } else if (/water pollution/i.test(question)) {
      response = "4000.00 m³";
    } else if (/air pollution/i.test(question)) {
      response = "3000.00 NOx";
    } else if (/gender/i.test(question)) {
      response = "70.00% employees";
    } else if (/net zero/i.test(question)) {
      response = "Target year: 2045";
    } else {
      response = `No data available for ${question}`;
    }
  }

  hasBeenCalled = true;
  return response;
}
