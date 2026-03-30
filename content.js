// Fallback script to click the "Homes" tab if the user somehow ends up on the non-Homes page
if (window.location.pathname !== "/homes") {
  const observer = new MutationObserver(() => {
    const homesTab = document.querySelector('a[role="tab"][href="/homes"]');
    if (homesTab && homesTab.getAttribute("aria-selected") !== "true") {
      homesTab.click();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Stop observing after 10 seconds if the tab is never found
  setTimeout(() => observer.disconnect(), 10000);
}
