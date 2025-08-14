document.addEventListener("DOMContentLoaded", function() {
  const targetNode = document.body; // watch entire body for new nodes
  const config = { childList: true, subtree: true };

  const callback = function(mutationsList, observer) {
    const hash = window.location.hash.substring(1); // "team"
    const tabMap = { team: "تیم آموزشی" };

    if (hash && tabMap[hash]) {
      const tabName = tabMap[hash];
      const tabButton = document.querySelector(
        `.w-tab-menu [data-w-tab='${tabName}']`
      );

      if (tabButton) {
        tabButton.click(); // activate the tab
        observer.disconnect(); // stop observing once tab is found
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
});
