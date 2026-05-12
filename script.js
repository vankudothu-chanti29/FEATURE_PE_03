// SEARCH FUNCTIONALITY

const searchInput = document.querySelector(".topbar input");

searchInput.addEventListener("keyup", function(){

  const searchValue = this.value.toLowerCase();

  const leadCards = document.querySelectorAll(".lead-card");
  const tableRows = document.querySelectorAll("tbody tr");

  // SEARCH LEADS

  leadCards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(searchValue)){

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

  // SEARCH CLIENTS

  tableRows.forEach(row => {

    const text = row.innerText.toLowerCase();

    if(text.includes(searchValue)){

      row.style.display = "";

    } else {

      row.style.display = "none";

    }

  });

});


// TASK COMPLETE BUTTON

const taskButtons = document.querySelectorAll(".task-card button");

taskButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.innerText = "Completed ✓";

    button.style.background = "#16a34a";

    button.disabled = true;

  });

});


// LEAD CARD CLICK EFFECT

const leadCards = document.querySelectorAll(".lead-card");

leadCards.forEach(card => {

  card.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS

    leadCards.forEach(item => {
      item.classList.remove("active-lead");
    });

    // ADD ACTIVE CLASS

    card.classList.add("active-lead");

  });

});


// ACTIVE LEAD STYLE

const style = document.createElement("style");

style.innerHTML = `

.active-lead{
  border-left:5px solid #2563eb;
  background:#eff6ff;
  transform:scale(1.02);
}

`;

document.head.appendChild(style);


// REAL-TIME CLOCK

const dashboardTitle = document.querySelector(".topbar h1");

const clock = document.createElement("p");

clock.style.fontSize = "14px";
clock.style.color = "#6b7280";
clock.style.marginTop = "5px";

dashboardTitle.appendChild(clock);

function updateClock(){

  const now = new Date();

  clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();


// SUMMARY CARD ANIMATION

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-6px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0)";

  });

});


// NOTIFICATION POPUP

setTimeout(() => {

  const notification = document.createElement("div");

  notification.innerHTML = "🔔 New Lead Added: Nova Agency";

  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.background = "#2563eb";
  notification.style.color = "white";
  notification.style.padding = "15px 20px";
  notification.style.borderRadius = "12px";
  notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  notification.style.zIndex = "999";
  notification.style.fontSize = "14px";

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.remove();

  }, 4000);

}, 3000);


// PIPELINE DRAG EFFECT (VISUAL ONLY)

leadCards.forEach(card => {

  card.setAttribute("draggable", "true");

  card.addEventListener("dragstart", () => {

    card.style.opacity = "0.5";

  });

  card.addEventListener("dragend", () => {

    card.style.opacity = "1";

  });

});


// DARK MODE TOGGLE

const darkModeBtn = document.createElement("button");

darkModeBtn.innerHTML = "🌙 Dark Mode";

darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "12px 18px";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "12px";
darkModeBtn.style.background = "#111827";
darkModeBtn.style.color = "white";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.zIndex = "999";

document.body.appendChild(darkModeBtn);

let darkMode = false;

darkModeBtn.addEventListener("click", () => {

  darkMode = !darkMode;

  if(darkMode){

    document.body.style.background = "#0f172a";
    document.body.style.color = "white";

    document.querySelectorAll(".card, .pipeline-column, .table-section, .task-card")
      .forEach(el => {

        el.style.background = "#1e293b";
        el.style.color = "white";

      });

  } else {

    document.body.style.background = "#f4f7fb";
    document.body.style.color = "#222";

    document.querySelectorAll(".card, .pipeline-column, .table-section, .task-card")
      .forEach(el => {

        el.style.background = "white";
        el.style.color = "#222";

      });

  }

});
