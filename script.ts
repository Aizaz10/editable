function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const profilePicture = (document.getElementById("profile-picture") as HTMLInputElement).files?.[0];
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const university = (document.getElementById("university") as HTMLInputElement).value;
    const gradYear = (document.getElementById("grad-year") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const jobYear = (document.getElementById("job-year") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

    const resumePreview = document.getElementById("resume-preview")!;
    resumePreview.innerHTML = `
        <div class="profile-section">
            <img class="profile-picture" src="${profilePicture ? URL.createObjectURL(profilePicture) : ''}" alt="Profile Picture">
            <h2 contenteditable="true">${name}</h2>
            <p contenteditable="true">Email: ${email}</p>
            <p contenteditable="true">Phone: ${phone}</p>
        </div>
        <div class="education-section">
            <h2>Education</h2>
            <p contenteditable="true">${degree}, ${university} (${gradYear})</p>
        </div>
        <div class="experience-section">
            <h2>Work Experience</h2>
            <p contenteditable="true">${jobTitle} at ${company} (${jobYear})</p>
        </div>
        <div class="skills-section">
            <h2>Skills</h2>
            <ul contenteditable="true">
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        </div>
    `;
}

document.addEventListener("input", (e) => {
    if ((e.target as HTMLElement).hasAttribute("contenteditable")) {
        const editableElement = e.target as HTMLElement;
        console.log(`Content updated: ${editableElement.innerHTML}`);
    }
});
