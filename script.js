(function () {
 
  const button = document.getElementById('ex1_button');
  const content = document.getElementById('ex1_content');

  button.addEventListener('click', function() {
    const numbers = Array.from({ length: 10 }, (_, i) => i).join(', ');
    content.textContent = numbers;
  });

  const phoneInput = document.getElementById('ex2_text');
  const validationMessage = document.getElementById('ex2_content');

  phoneInput.addEventListener('input', function() {
    const phoneNumber = phoneInput.value;

    if (phoneNumber.length !== 9) {
      validationMessage.textContent = 'Długość numeru musi być równa 9';
    } else if (/[a-zA-Z]/.test(phoneNumber)) {
      validationMessage.textContent = 'Numer nie może zawierać liter';
    } else if (/[^0-9]/.test(phoneNumber)) {
      validationMessage.textContent = 'Numer nie może zawierać znaków specjalnych';
    } else {
      validationMessage.textContent = 'Numer telefonu jest poprawny';
    }
  });

  
  const draggableElement = document.getElementById('ex3_element');
  const containerOne = document.getElementById('ex3_one');
  const containerTwo = document.getElementById('ex3_two');

  
  draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  
  function handleDragOver(event) {
    event.preventDefault(); 
  }

  
  function handleDrop(event) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(elementId);
    event.target.appendChild(draggable);
  }

  
  containerOne.addEventListener('dragover', handleDragOver);
  containerOne.addEventListener('drop', handleDrop);

  containerTwo.addEventListener('dragover', handleDragOver);
  containerTwo.addEventListener('drop', handleDrop);
})();
