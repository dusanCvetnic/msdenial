const REJECTION_TIMESTAMP_SECONDS = 1772450040; // 02 Mar 2026 12:14:00 Belgrade time

function pad2(value) {
  return String(value).padStart(2, "0");
}

function updateRejectionCounter() {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const elapsed = Math.max(0, nowSeconds - REJECTION_TIMESTAMP_SECONDS);

  const days = Math.floor(elapsed / 86400);
  const hours = Math.floor((elapsed % 86400) / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  const counter = document.getElementById("rejectionCounter");
  counter.textContent = `${days}d ${pad2(hours)}h ${pad2(minutes)}m ${pad2(seconds)}s`;
}

updateRejectionCounter();
setInterval(updateRejectionCounter, 1000);
