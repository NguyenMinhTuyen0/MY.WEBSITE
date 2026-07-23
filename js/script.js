//=====================
// Mảng object
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

const projects = [
    {
        title: "Website bán hàng",
        tech: "HTML CSS JS"
    },
    {
        title: "Portfolio",
        tech: "SCSS Responsive"
    },
    {
        title: "Blog cá nhân",
        tech: "HTML CSS"
    }
];


//=====================
// map()
//=====================

const skillNames = skills.map(skill => skill.name);

console.log(skillNames);


//=====================
// DOM tạo kỹ năng
//=====================

const skillsList = document.getElementById("skillsList");

skills.forEach(skill => {

    const card = document.createElement("div");

    card.className = "skill_card";

    card.innerHTML = `
        <h3>${skill.name}</h3>
        <p>Mức độ: ${skill.level}</p>
    `;

    skillsList.appendChild(card);

});


//=====================
// DOM tạo dự án
//=====================

const projectList = document.getElementById("projectList");

projects.forEach(project => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.tech}</p>
    `;

    projectList.appendChild(card);

});


//=====================
// Arrow Function
//=====================

const showMessage = message => {

    alert(message);

};


//=====================
// Validate Form
//=====================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    if(name===""){

        showMessage("Vui lòng nhập họ tên");

        return;

    }

    if(email===""){

        showMessage("Vui lòng nhập Email");

        return;

    }

    showMessage("Gửi thông tin thành công!");

});