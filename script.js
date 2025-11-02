const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-drop");
  const content = item.querySelector(".accordionContent");
  const icon = item.querySelector(".dropdown");

  content.style.display = "none";

  button.addEventListener("click", () => {
    const isOpen = content.style.display === "block";

    accordionItems.forEach((otherItem) => {
      const otherContent = otherItem.querySelector(".accordionContent");
      const otherIcon = otherItem.querySelector(".dropdown");
      if (otherContent !== content) {
        otherContent.style.display = "none";
        if (otherIcon) otherIcon.classList.remove("open");
      }
    });

    content.style.display = isOpen ? "none" : "block";
    if (icon) icon.classList.toggle("open", !isOpen);
  });
});
