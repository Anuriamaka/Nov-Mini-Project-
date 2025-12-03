
// TOGGLE BETWEEN TASKS AND SUMMARY BUTTONS
const tasksBtn = document.getElementById("tasks__button");
const summaryBtn = document.getElementById("summary__button");

const tasksContents = document.getElementById("my__tasks__contents");
const summaryContents = document.getElementById("ai__summary__contents");

// Show my tasks contents
tasksBtn.addEventListener("click", () => {
    tasksBtn.classList.add("activeBtn");
    tasksBtn.classList.remove("inactiveBtn");

    summaryBtn.classList.add("inactiveBtn");
    summaryBtn.classList.remove("activeBtn");

    tasksContents.classList.remove("hidden");
    summaryContents.classList.add("hidden");
});

// Show AI summary contents
summaryBtn.addEventListener("click", () => {
    summaryBtn.classList.add("activeBtn");
    summaryBtn.classList.remove("inactiveBtn");

    tasksBtn.classList.add("inactiveBtn");
    tasksBtn.classList.remove("activeBtn");

    summaryContents.classList.remove("hidden");
    tasksContents.classList.add("hidden");
});


// TOGGLE BETWEEN LATEST SUMMARY AND HISTORY BUTTONS
const latestSummaryBtn = document.getElementById("latest__summary__button");
const historyBtn = document.getElementById("history__button");

const latestSummaryContent = document.getElementById("latest__summary__content");
const historyContent = document.getElementById("history__content");

// Show latest summary contents
latestSummaryBtn.addEventListener("click", () => {
    latestSummaryBtn.classList.add("activeBtn");
    latestSummaryBtn.classList.remove("inactiveBtn");

    historyBtn.classList.add("inactiveBtn");
    historyBtn.classList.remove("activeBtn");

    latestSummaryContent.classList.remove("hidden");
    historyContent.classList.add("hidden");
});

// Show History contents
historyBtn.addEventListener("click", () => {
    historyBtn.classList.add("activeBtn");
    historyBtn.classList.remove("inactiveBtn");

    latestSummaryBtn.classList.add("inactiveBtn");
    latestSummaryBtn.classList.remove("activeBtn");

    historyContent.classList.remove("hidden");
    latestSummaryContent.classList.add("hidden");
});


///Add task button to open MODAL
document.addEventListener("DOMContentLoaded", () => {
    const taskModal = document.getElementById("taskModal");
    const openTaskModal = document.getElementById("openTaskModal");
    const closeTaskModal = document.getElementById("closeTaskModal");
    const cancelTask = document.getElementById("cancelTask");

    // OPEN MODAL
    openTaskModal.addEventListener("click", () => {
        taskModal.style.display = "flex";
    });

    // CLOSE FUNCTIONS
    function closeModal() {
        taskModal.style.display = "none";
    }

    closeTaskModal.addEventListener("click", closeModal);
    cancelTask.addEventListener("click", closeModal);

    // Close when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            closeModal();
        }
    });
});
