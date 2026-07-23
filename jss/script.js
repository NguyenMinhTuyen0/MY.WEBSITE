//=====================
// Mảng kỹ năng
//=====================

const skills = [
    {
        name: "HTML5",
        level: "Tốt"
    },
    {
        name: "CSS3 / SCSS",
        level: "Khá"
    },
    {
        name: "JavaScript",
        level: "Khá"
    },
    {
        name: "Responsive Web",
        level: "Tốt"
    }
];

//=====================
// map()
//=====================

const skillNames = skills.map(skill => skill.name);
console.log(skillNames);

//=====================
// Hiển thị kỹ năng
//=====================

const skillsList = document.getElementById("skillsList");

if (skillsList) {

    skills.forEach(skill => {

        const card = document.createElement("div");

        card.className = "skill_card";

        card.innerHTML = `
            <h3>${skill.name}</h3>
            <p>Mức độ: ${skill.level}</p>
        `;

        skillsList.appendChild(card);

    });

}

//=====================
// Hiển thị dự án từ JSON
//=====================

async function loadProjects() {

    const projectList = document.getElementById("projectList");

    if (!projectList) return;

    try {

        const response = await fetch("js/data.json");

        if (!response.ok) {
            throw new Error("Không đọc được data.json");
        }

        const projects = await response.json();

        projectList.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.tech}</p>
            `;

            projectList.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        projectList.innerHTML = `
            <p>Không thể tải dữ liệu.</p>
        `;

    }

}

loadProjects();

//=====================
// Validate Form
//=====================

const form = document.getElementById("contactForm");

const showMessage = (message) => {

    alert(message);

};

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "") {
            showMessage("Vui lòng nhập họ tên");
            return;
        }

        if (email === "") {
            showMessage("Vui lòng nhập Email");
            return;
        }

        showMessage("Gửi thông tin thành công!");

    });

}

//=====================
// Dark Mode
//=====================

const btn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

if (btn) {

    btn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}