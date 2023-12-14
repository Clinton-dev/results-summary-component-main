import results from "./data.mjs";

const summary = document.getElementById("summary-details-container");
console.log(results);
let categoryResults = ``;

results.map((result, index) => {
  categoryResults += `
            <div class="summary__wrapper summary__wrapper__${index + 1}">
             <div class="summary__icons ">
                <img src=${result.icon} />
                <p>${result.category}</p>
             </div>
             <p><strong>${result.score}</strong> / 100</p>
            </div>
    `;
});

summary.innerHTML = categoryResults;
