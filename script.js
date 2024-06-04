
let question=document.querySelectorAll(".question")
question.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Check if the clicked button already has the 'active' class
      const isActive = btn.classList.contains("active");
  
      // Remove the 'active' class from all buttons
      question.forEach((item) => {
        item.classList.remove("active");
      });
  
      // If the clicked button was not active, add the 'active' class to it
      if (!isActive) {
        btn.classList.add("active");
      }
    });
  });