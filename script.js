function generateResume() {
    var _a;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var profilePicture = (_a = document.getElementById("profile-picture").files) === null || _a === void 0 ? void 0 : _a[0];
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var gradYear = document.getElementById("grad-year").value;
    var jobTitle = document.getElementById("job-title").value;
    var company = document.getElementById("company").value;
    var jobYear = document.getElementById("job-year").value;
    var skills = document.getElementById("skills").value.split(",");
    var resumePreview = document.getElementById("resume-preview");
    resumePreview.innerHTML = "\n        <div class=\"profile-section\">\n            <img class=\"profile-picture\" src=\"".concat(profilePicture ? URL.createObjectURL(profilePicture) : '', "\" alt=\"Profile Picture\">\n            <h2 contenteditable=\"true\">").concat(name, "</h2>\n            <p contenteditable=\"true\">Email: ").concat(email, "</p>\n            <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n        </div>\n        <div class=\"education-section\">\n            <h2>Education</h2>\n            <p contenteditable=\"true\">").concat(degree, ", ").concat(university, " (").concat(gradYear, ")</p>\n        </div>\n        <div class=\"experience-section\">\n            <h2>Work Experience</h2>\n            <p contenteditable=\"true\">").concat(jobTitle, " at ").concat(company, " (").concat(jobYear, ")</p>\n        </div>\n        <div class=\"skills-section\">\n            <h2>Skills</h2>\n            <ul contenteditable=\"true\">\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        </div>\n    ");
}
document.addEventListener("input", function (e) {
    if (e.target.hasAttribute("contenteditable")) {
        var editableElement = e.target;
        console.log("Content updated: ".concat(editableElement.innerHTML));
    }
});
