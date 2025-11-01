function toggleAccordion(element) {
  const accordionItem = element.parentElement;
  const content = accordionItem.querySelector(".accordionContent");
  const icon = element.querySelector(".dropdown");

  document.querySelectorAll(".accordionContent").forEach((item) => {
    if (item !== content && item.classList.contains("active")) {
      item.classList.remove("active");
      item.parentElement.querySelector(".dropdown").classList.remove("active");
    }
  });

  content.classList.toggle("active");
  icon.classList.toggle("active");
}

function openTab(evt, tabName) {
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Add active class to clicked tab
  evt.currentTarget.classList.add("active");

  // Here you could add logic to filter accordion items based on the selected tab
  console.log("Selected tab:", tabName);
}
