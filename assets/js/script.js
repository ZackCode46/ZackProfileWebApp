// Switch between project tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(tabLink => {
  tabLink.addEventListener('click', () => {
    const targetTab = tabLink.getAttribute('data-tab');

    // Hide all tab contents
    tabContents.forEach(tabContent => {
      tabContent.style.display = 'none';
      tabContent.classList.remove('active');
    });

    // Show the selected tab content
    const targetContent = document.getElementById(targetTab);
    targetContent.style.display = 'block';
    targetContent.classList.add('active');

    // Highlight the active tab
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    tabLink.classList.add('active');
  });
});

// Show the first tab content by default
if (tabLinks.length > 0) {
  tabLinks[0].click();
}
