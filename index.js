import results from "./data.mjs";

const summary = document.getElementById("summary-details-container");
console.log(results);
let categoryResults = ``;

results.map((result, index) => {
  const delay = 0.3 * (index + 1);
  categoryResults += `
            <div class="summary__wrapper summary__wrapper__${
              index + 1
            }" style="animation-delay: ${delay}s">
             <div class="summary__icons ">
                <img src=${result.icon} />
                <p class="summary__icons__text__${index + 1}">${
    result.category
  }</p>
             </div>
             <p><strong>${result.score}</strong> / 100</p>
            </div>
    `;
});

summary.innerHTML = categoryResults;

// Try to fix the jumpy animation
// document.querySelectorAll(".summary__wrapper").forEach((element) => {
//   element.classList.add("show");
// });
