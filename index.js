

const departments = [
    { value: "---", label: "---" },
    { value: 'human_resources', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'customer_service', label: 'Customer Service' },
    { value: 'product_management', label: 'Product Management' },
    { value: 'design', label: 'Design' },
    { value: 'research_and_development', label: 'Research and Development' },
    { value: 'operations', label: 'Operations' },
    { value: 'legal', label: 'Legal' },
    { value: 'information_technology', label: 'Information Technology' },
    { value: 'administration', label: 'Administration' },
    { value: 'quality_assurance', label: 'Quality Assurance' },
    { value: 'procurement', label: 'Procurement' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'business_development', label: 'Business Development' },
    { value: 'data_science', label: 'Data Science' },
    { value: 'communications', label: 'Communications' },
    { value: 'training_and_development', label: 'Training and Development' }
];
const options = [
       {value: "---", label: "---"},
      { value: 'javascript', label: 'JavaScript' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'html_css', label: 'HTML/CSS' },
      { value: 'react', label: 'React' },
      { value: 'angular', label: 'Angular' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'nodejs', label: 'Node.js' },
      { value: 'express', label: 'Express.js' },
      { value: 'mongodb', label: 'MongoDB' },
      { value: 'sql', label: 'SQL' },
      { value: 'git', label: 'Git' },
      { value: 'docker', label: 'Docker' },
      { value: 'kubernetes', label: 'Kubernetes' },
      { value: 'aws', label: 'AWS' },
      { value: 'azure', label: 'Azure' },
      { value: 'devops', label: 'DevOps' },
      { value: 'data_analysis', label: 'Data Analysis' },
      { value: 'machine_learning', label: 'Machine Learning' },
      { value: 'ui_ux_design', label: 'UI/UX Design' },
      { value: 'project_management', label: 'Project Management' },
      { value: 'scrum', label: 'Scrum' },
      { value: 'agile', label: 'Agile' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'seo', label: 'SEO' },
      { value: 'content_creation', label: 'Content Creation' },
      { value: 'public_speaking', label: 'Public Speaking' },
      { value: 'negotiation', label: 'Negotiation' },
      { value: 'customer_support', label: 'Customer Support' },
      { value: 'sales', label: 'Sales' }
    ];
const cities = [
        {value: "---", label: "---"},
        { value: 'hyderbad', label: 'Hyderbad' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'bangolore', label: 'Banglore' },
        { value: 'chennai', label: 'Chennai' },
        { value: 'pune', label: 'Pune' },
        { value: 'noida', label: 'Noida' },
        { value: 'kolkata', label: 'Kolkata' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'amhadabad', label: 'Ahmadabad' },
        { value: 'canada', label: 'Canada' },
        { value: 'usa', label: 'USA' }
        
      ];

const experience=[
        {id:18, value:"---"},
         {id:1, value:"fresher"},
         {id:2, value:"0-1 years"},
         {id:3, value:"1-3 years"},
         {id:4, value:"3-5 years"},
         {id:5, value:"5+ years"},
         {id:6, value:"6+ years"},
         {id:7, value:"7+ years"},
         {id:8, value:"8+ years"},
         {id:9, value:"9+ years"},
         {id:10, value:"10+ years"},
         {id:12, value:"11+ years"},
         {id:13, value:"12+ years"},
         {id:14, value:"13+ years"},
         {id:15, value:"14+ years"},
         {id:16, value:"15+ years"},
         {id:17, value:"16+ years"},
      ]      
// Get the select element
const departmentSelect = document.getElementById("department");
const skillSelect=document.getElementById("skills")
const workExperience=document.getElementById("workexperience")

// Populate the select element with options
departments.forEach(department => {
    const option = document.createElement("option");
    option.value = department.value;
    option.textContent = department.label;
    departmentSelect.appendChild(option);
});

// skills.forEach(skill => {
//     const skilloption = document.createElement("option");
//     skilloption.value = skill.value;
//     skilloption.textContent =skill.value;
//     skillSelect.appendChild(skilloption);
// });

experience.forEach(work=>{
    const workoption=document.createElement("option")
    workoption.value=work.value 
    workoption.textContent=work.value
    workExperience.appendChild(workoption)

})

function toggleEndDate() {
    const endDateInput = document.getElementById("enddate");
    const noEndDateCheckbox = document.getElementById("noenddate");

    if(noEndDateCheckbox.checked){
        endDateInput.style.display="none"
    }else{
        endDateInput.style.display="block"
    }
  }




  const skillInput = document.getElementById("skills");
  const skillCont = document.getElementById("skills-cnt");
  
  skillInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          event.preventDefault();
  
          const skillValue = skillInput.value.trim();
          if (skillValue) {
              const skillItem = document.createElement("li");
              skillItem.textContent = skillValue;
              skillItem.classList.add("skill-holder-item");
              skillCont.appendChild(skillItem);
              skillInput.value = ""; // Clear input after adding
  
              console.log(`Skill added: ${skillValue}`); // Check if this logs
          }
      }
  });
  
 

 // Get the container and checkbox elements
const endDateinput = document.getElementById("enddate");
const endDatelabel = document.getElementById("label-enddate");
const checkbox = document.getElementById("checkbox");

// Add event listener to the checkbox
checkbox.addEventListener("click", () => {
    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Hide the entire container and all its child elements
        endDateinput.style.display = "none";
        endDatelabel.style.display = "none";
    } else {
        // Show the container again
        endDateinput.style.display = "block";
        endDatelabel.style.display = "block";
    }
});






