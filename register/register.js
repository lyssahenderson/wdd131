document.addEventListener('DOMContentLoaded', function () {
    // Set initial participant count
    let participantCount = 1;
  
    // Function to generate a new participant template
    function participantTemplate(count) {
      return `
      <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
              <label for="fname${count}">First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" required />
          </div>
          <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" required />
          </div>
          <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" required />
          </div>
          <div class="item">
              <label for="date${count}">Desired Date<span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" required />
          </div>
      </section>`;
    }
  
    // Add event listener to the "Add Participant" button
    document.querySelector('#addParticipant').addEventListener('click', () => {
      participantCount++;
      const newParticipantHTML = participantTemplate(participantCount);
      const addButton = document.querySelector('#addParticipant');
      addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });
  
    // Function to calculate the total fees
    function totalFees() {
      let feeElements = document.querySelectorAll("[id^=fee]");
      feeElements = [...feeElements];
      const total = feeElements.reduce((sum, input) => sum + Number(input.value || 0), 0);
      return total;
    }
  
    // Function to generate a success message
    function successTemplate(info) {
      return `
      <p>Thank you, ${info.name}, for registering.</p>
      <p>You have registered ${info.count} participant(s) and owe $${info.totalFees} in fees.</p>`;
    }
  
    // Form submission handler
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log("Form submitted");
  
      // Get the primary contact's name
      const adultName = document.querySelector('#adult_name').value;
      console.log("Adult Name:", adultName);
  
      // Calculate the total fees
      const total = totalFees();
      console.log("Total Fees:", total)
  
      // Check if the form is valid
      if (!adultName) {
        alert("Please enter the adult's name.");
        return;
      }
  
      // Create the info object for the success message
      const info = {
        name: adultName,
        count: participantCount,
        totalFees: total
      };
  
      // Display the success message
      const summary = document.querySelector('#summary');
      summary.innerHTML = successTemplate(info);
      summary.classList.remove('hide');
  
      // Hide the form after submission
      document.querySelector('#registrationForm').classList.add('hide');
    }
  
    // Attach the event listener for form submission
    const form = document.querySelector('#registrationForm');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
  });
  