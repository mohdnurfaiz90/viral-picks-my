let deferredInstallPrompt = null;

const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

function installHelpMessage() {
  if (isIos()) return "Dalam Safari, tekan Share, pilih Add to Home Screen, hidupkan Open as Web App, kemudian tekan Add.";
  return "Buka menu pelayar (tiga titik), kemudian pilih Install app atau Add to Home screen.";
}

function showInstallHelp() {
  document.getElementById("install-help-dialog")?.remove();
  const dialog = document.createElement("dialog");
  dialog.id = "install-help-dialog";
  dialog.className = "install-help-dialog";
  dialog.innerHTML = `<div class="install-help-content"><img src="assets/viral-picks-profile.png" alt=""><h2>Pasang Viral Picks MY</h2><p>${installHelpMessage()}</p><button type="button">Faham</button></div>`;
  document.body.append(dialog);
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => dialog.remove());
  dialog.showModal();
}

async function requestInstall() {
  if (isStandalone()) return;
  if (!deferredInstallPrompt) return showInstallHelp();
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallButtons();
}

function updateInstallButtons() {
  document.querySelectorAll("[data-install-app]").forEach((button) => {
    button.hidden = isStandalone();
  });
}

// The showroom button is rendered after product data finishes loading.
// Event delegation keeps it clickable even when it did not exist at DOMContentLoaded.
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-install-app]");
  if (!button) return;
  requestInstall();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButtons();
});
window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallButtons();
});
document.addEventListener("DOMContentLoaded", updateInstallButtons);
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
