const dateOfBirthInput = document.getElementById('date-of-birth');
const ageOutput = document.getElementById('age');

dateOfBirthInput.addEventListener('change', function() {
  const dateOfBirth = new Date(this.value);
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const months = today.getMonth() - dateOfBirth.getMonth();
  const days = today.getDate() - dateOfBirth.getDate();

  if (months < 0) {
    age--;
    months += 12;
  }

  if (days < 0) {
    months--;
    days += 30;
  }

  ageOutput.textContent = `${age} years, ${months} months, and ${days} days old`;
});