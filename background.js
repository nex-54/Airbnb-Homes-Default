// Redirect Airbnb root, experiences and services URLs to homes
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return;

  const url = new URL(details.url);

  const path = url.pathname.replace(/\/+$/, "") || "/";

  if (
    path === "/" ||
    path === "/experiences" ||
    path === "/services"
  ) {
    chrome.tabs.update(details.tabId, {
      url: url.origin + "/homes" + url.search + url.hash
    }).catch(() => {});
  }
}, {
  url: [{ hostSuffix: "airbnb.com" }]
});
