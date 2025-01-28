const inputs = document.querySelectorAll('.inputForm');
const labels = document.querySelectorAll('.labelForm');
if (window.innerWidth > 500) {
  
  // Function to update the label style based on input content
  function updateLabel() {
    inputs.forEach((input, index) => {
      if (input.value || input === document.activeElement) { // If input has a value or is focused
        labels[index].style.fontSize = '1vw';  // Shrink label
        labels[index].style.top = '17%';  // Move the label up
        labels[index].style.color = '#9EFCF1';  // Change label color when filled or focused
      } else {
        labels[index].style.fontSize = '1.4vw';  // Reset to original size
        labels[index].style.top = '33%';  // Reset label position
        labels[index].style.color = '#48798C';  // Reset label color
      }
    });
  }

  // Add event listeners to update the label when the input changes or focus changes
  inputs.forEach(input => {
    input.addEventListener('input', updateLabel);  // Detect changes in input
    input.addEventListener('focus', updateLabel);  // Detect focus event
    input.addEventListener('blur', updateLabel);  // Detect when the input loses focus
  });

  // Also update the labels when the page loads in case there is already some content in the inputs
  
}else{
  function updateLabel() {
    inputs.forEach((input, index) => {
      if (input.value || input === document.activeElement) { // If input has a value or is focused
        labels[index].style.fontSize = '3vw';  // Shrink label
        labels[index].style.top = '17%';  // Move the label up
        labels[index].style.color = '#9EFCF1';  // Change label color when filled or focused
      } else {
        labels[index].style.fontSize = '4vw';  // Reset to original size
        labels[index].style.top = '33%';  // Reset label position
        labels[index].style.color = '#48798C';  // Reset label color
      }
    });
  }
  
  // Add event listeners to update the label when the input changes or focus changes
  inputs.forEach(input => {
    input.addEventListener('input', updateLabel);  // Detect changes in input
    input.addEventListener('focus', updateLabel);  // Detect focus event
    input.addEventListener('blur', updateLabel);  // Detect when the input loses focus
  });
  
  // Also update the labels when the page loads in case there is already some content in the inputs
  
}

window.addEventListener('DOMContentLoaded', updateLabel);