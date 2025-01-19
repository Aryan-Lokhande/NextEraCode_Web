// F&Q JS starts
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.plus-icon');

        // Toggle the answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});
// F&Q JS Ends

//About us JS start
document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");
  const totalItems = timeline.children.length;
  const visibleItems = 4;
  let currentIndex = 0;

  function updateTimeline() {
    const offset = -(currentIndex * 25); // Each item takes 25% of the width
    timeline.style.transform = `translateX(${offset}%)`;
  }

  function autoScrollTimeline() {
    currentIndex = (currentIndex + 1) % (totalItems - visibleItems + 1);
    updateTimeline();
  }

  setInterval(autoScrollTimeline, 3040); // Automatically scroll every 3 seconds
});
// About us JS Ends
