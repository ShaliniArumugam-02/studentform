document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const table = document.getElementById("studentTable");
  const tableBody = document.querySelector("#studentTable tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
   
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.querySelector("select").value;

    const genderInput = document.querySelector("input[name='gender']:checked");
    const gender = genderInput ? genderInput.nextSibling.textContent.trim() : "";

    if (!name || !age || !email || !gender || !course) {
      alert("Please fill out all fields.");
      return;
    }

    table.classList.remove("hidden");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border border-gray-300 p-2">${name}</td>
      <td class="border border-gray-300 p-2">${age}</td>
      <td class="border border-gray-300 p-2">${gender}</td>
      <td class="border border-gray-300 p-2">${course}</td>
      <td class="border border-gray-300 p-2">${email}</td>
      <td class="border border-gray-300 p-2 text-center">
        <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
      </td>
    `;

   
    tableBody.appendChild(row);

    form.reset();


    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      row.remove();

      if (tableBody.children.length === 0) {
        table.classList.add("hidden");
      }

    });
  });
});
