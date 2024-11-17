(function () {
  const button = document.getElementById('przyklad1_button');
  const content = document.getElementById('przyklad1_content');

  button.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    content.textContent = `Generated number: ${randomNumber}`;
  });

  
    const emailInput = document.getElementById('przyklad2_input');
    const validationMessage = document.getElementById('przyklad2_content');

    emailInput.addEventListener('input', function() {
      const email = emailInput.value;

      if (!email.includes('@')) {
        validationMessage.textContent = 'Adres musi zawierać znak `@`';
      } else if (email.indexOf('.') <= email.indexOf('@')) {
        validationMessage.textContent = 'Adres musi zawierać kropkę po znaku `@`';
      } else {
        validationMessage.textContent = 'Adres e-mail jest poprawny';
      }
    });
  const progressButton = document.getElementById('przyklad3_button');
  const progressBar = document.getElementById('przyklad3_progress');
  const progressContent = document.getElementById('przyklad3_content');
  let progress = 0;

  progressButton.addEventListener('click', function() {
    if (progress < 100) {
      progress += 10;
      progressBar.style.width = progress + '%';
      if (progress === 100) {
        progressContent.textContent = 'Zadanie ukończone';
      }
    }
  });
})();