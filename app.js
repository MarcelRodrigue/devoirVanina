const submit = document.getElementById('submit');
const input_question = document.getElementById('input_promt');
const conversationDiv = document.querySelector('.conversation');




const chatbox = document.querySelector('.chatbot');
const chatboxhead = document.querySelector('.chatHead');


chatboxhead.addEventListener('click', () => {
  chatbox.classList.toggle('active');
});



// Add an event listener to the submit button
submit.addEventListener("click", async () => {
    // Get the value of the input field
const prompvalue = input_question.value;

// Clear the input field
input_question.value = '';

const promtDiv = document.createElement('div');
promtDiv.classList.add('promt');
promtDiv.classList.add('message');

// Add the aiResponseDiv to the conversation div
conversationDiv.appendChild(promtDiv);

promtDiv.textContent = prompvalue;

// Disable the input field for 3 seconds
const element = document.querySelector('#writing');

  element.classList.toggle('hide');



const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer wkM4oQRIsE34aVIMQFlC8CxcofHapZvi'
    },
    body: JSON.stringify({
      numResults: 1,
      maxTokens: 5000,
      minTokens: 0,
      temperature: 0.7,
      topP: 1,
      topKReturn: 0,
      frequencyPenalty: {
        scale: 0,
        applyToWhitespaces: true,
        applyToPunctuations: true,
        applyToNumbers: true,
        applyToStopwords: true,
        applyToEmojis: true
      },
      presencePenalty: {
        scale: 0,
        applyToWhitespaces: true,
        applyToPunctuations: true,
        applyToNumbers: true,
        applyToStopwords: true,
        applyToEmojis: true
      },
      countPenalty: {
        scale: 0,
        applyToWhitespaces: true,
        applyToPunctuations: true,
        applyToNumbers: true,
        applyToStopwords: true,
        applyToEmojis: true
      },
      prompt: prompvalue
    })
  };




    
    // Make a fetch request to the AI21 API
    const response = await fetch('https://api.ai21.com/studio/v1/j2-mid/complete', options);
  
    // Convert the response to JSON
    const jsonResponse = await response.json();
  
    // Get the first completion from the response
    const completion = jsonResponse.completions[0];
  
    // Get the text of the completion
    const text = completion.data.text;
  
    // Store the text in a variable
    const completedText = text;
  
    // Log the completed text to the console
// Create a div with the class names aiResponse and message
const aiResponseDiv = document.createElement('div');
aiResponseDiv.classList.add('aiResponse');
aiResponseDiv.classList.add('message');

// Add the aiResponseDiv to the conversation div
conversationDiv.appendChild(aiResponseDiv);

aiResponseDiv.textContent = completedText;
element.classList.toggle('hide');


    
  });
  
    

