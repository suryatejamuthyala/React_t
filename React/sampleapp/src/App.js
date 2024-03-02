import React, { useState } from 'react';

const ValidatedForm = () => {
  // State to manage the form input value and validation error
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  // Event handler for input change
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Simple validation: Input must not be empty
    if (value.trim() === '') {
      setInputError('Input cannot be empty');
    } else {
      setInputError('');
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are validation errors
    if (inputError) {
      console.log('Form has errors. Cannot submit.');
      return;
    }

    // Perform actions with the form data
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <div>
      <h1>Validated Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidatedForm;
