document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("student_form");
  const tBody = document.getElementById("t_body");
  const clearBtn = document.getElementById("clear");

  let students = JSON.parse(localStorage.getItem("studentArray")) || [];
  let editId = null; // track student being edited

  //Handle form submit (Add or Update)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const first_name = document.getElementById("first_name").value.trim();
    const last_name = document.getElementById("last_name").value.trim();
    const maths = Number(document.getElementById("maths").value);
    const chemistry = Number(document.getElementById("chemistry").value);
    const physics = Number(document.getElementById("physics").value);

    if (!first_name || !last_name || isNaN(maths) || isNaN(chemistry) || isNaN(physics)) {
      alert("Please fill all fields correctly!");
      return;
    }

    const total = maths + chemistry + physics;
    const avg = (total / 3).toFixed(2);

    const newStudent = {
      id: editId ? editId : Date.now(),
      first_name,
      last_name,
      maths,
      chemistry,
      physics,
      total,
      avg,
      rank: 0,
    };

    if (editId) {
      // update existing
      students = students.map((stu) => (stu.id === editId ? newStudent : stu));
      editId = null;
    } else {
      // add new
      students.push(newStudent);
    }

    saveToLocal();
    renderTable();
    form.reset();
  });

  //  Clear form
  clearBtn.addEventListener("click", () => {
    form.reset();
    editId = null;
  });

  //  Save to local storage
  function saveToLocal() {
    localStorage.setItem("studentArray", JSON.stringify(students));
  }

  //  Update ranks
  function updateRanks() {
    students.sort((a, b) => b.total - a.total);
    students.forEach((stu, index) => {
      stu.rank = index + 1;
    });
    saveToLocal();
  }

  //  Render student table
  function renderTable() {
    updateRanks();
    tBody.innerHTML = "";

    students.forEach((stu, index) => {
      const row = `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${stu.first_name} ${stu.last_name}</td>
          <td>${stu.maths}</td>
          <td>${stu.chemistry}</td>
          <td>${stu.physics}</td>
          <td>${stu.total}</td>
          <td>${stu.avg}</td>
          <td>${stu.rank}</td>
          <td>
            <div class="action_btn d-flex gap-2">
              <button class="btn btn-outline-success btn-sm" data-action="edit" data-id="${stu.id}">Edit</button>
              <button class="btn btn-outline-danger btn-sm" data-action="delete" data-id="${stu.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
      tBody.insertAdjacentHTML("beforeend", row);
    });

    //  Update top student & subject toppers
    updateTopStudents(students);
  }

  //  Handle Edit / Delete clicks (event delegation)
  tBody.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "delete") {
      students = students.filter((s) => s.id !== id);
      saveToLocal();
      renderTable();
    }

    if (action === "edit") {
      const stu = students.find((s) => s.id === id);
      if (!stu) return;

      document.getElementById("first_name").value = stu.first_name;
      document.getElementById("last_name").value = stu.last_name;
      document.getElementById("maths").value = stu.maths;
      document.getElementById("chemistry").value = stu.chemistry;
      document.getElementById("physics").value = stu.physics;

      editId = stu.id;
    }
  });

  //  Update Top Student & Subject Toppers
  function updateTopStudents(students) {
    if (students.length === 0) {
      document.getElementById("topName").textContent = "-";
      document.getElementById("topTotal").textContent = "Total Marks : -";
      document.getElementById("topAverage").textContent = "Average : -";
      return;
    }

    //  Top overall student
    const topStudent = [...students].sort((a, b) => b.total - a.total)[0];
    document.getElementById("topName").textContent = `${topStudent.first_name} ${topStudent.last_name}`;
    document.getElementById("topTotal").textContent = `Total Marks : ${topStudent.total}`;
    document.getElementById("topAverage").textContent = `Average : ${topStudent.avg}`;

    //  Subject-wise toppers
    const mathTop = [...students].sort((a, b) => b.maths - a.maths)[0];
    const chemistryTop = [...students].sort((a, b) => b.chemistry - a.chemistry)[0];
    const physicsTop = [...students].sort((a, b) => b.physics - a.physics)[0];

    const updateSubjectTop = (id, stu, mark) => {
      const el = document.getElementById(id);
      el.querySelector(".name").textContent = `${stu.first_name} ${stu.last_name}`;
      el.querySelector(".mark").textContent = `Mark : ${mark}`;
      el.querySelector(".rank").textContent = `Rank : ${stu.rank}`;
    };

    updateSubjectTop("mathTop", mathTop, mathTop.maths);
    updateSubjectTop("chemistryTop", chemistryTop, chemistryTop.chemistry);
    updateSubjectTop("physicsTop", physicsTop, physicsTop.physics);
  }

  // Initial render
  renderTable();
});
