// Projects array
const projectsArray = [];

// Current project variable
let currentProject = "";

// DOM - list of all document.querySelector's
const selectBottomLeftContainer = document.querySelector('#bottom-left');
const selectBottomRightContainer = document.querySelector('#bottom-right');
const selectProjectsContainer = document.querySelector('#list-of-projects-container');
const selectListOfToDosContainer = document.querySelector('#list-of-todos-container');
const clickCreateNewProjectButton = document.querySelector('#create-new-project');
const clickCreateNewToDoItemButton = document.querySelector('#create-new-todo-item');

// Project factory
const ProjectFactory = (name) => {
    name = name;
    toDos = [];
    return {name, toDos};
}

// DOM Function - displays each project as a button
displayProjects = (array) => {
    for (let i = 0; i < array.length; i++) {
        const displayProject = document.createElement('button');
        displayProject.textContent = array[i].name;
        selectProjectsContainer.appendChild(displayProject);
    }
}

// Function that pushes a new project to the projectsArray
addProjectToProjectsArray = project => projectsArray.push(project);

// Alert box opens up to create first project
do {
    const nameFirstProject = prompt('Create a name for your first project.  This name must not be blank.', 'Project1');

    // If project title is non-blank, create project using ProjectFactory and push it to projectsArray
    if (nameFirstProject !== "") {
        currentProject = ProjectFactory(nameFirstProject);
        addProjectToProjectsArray(currentProject);
        displayProjects(projectsArray);
    }
} while (currentProject === "");

// ToDo factory
const ToDoFactory = (title, description, dueDate, priority, notes, checklist) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    return {title, description, dueDate, priority, notes, checklist};
}

// DOM = make Create New Project Button clickable
clickCreateNewProjectButton.addEventListener('click', () => {

    // Create input box to type in new project title
    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('id', 'newest-project');
    selectBottomLeftContainer.appendChild(inputBox);

    // Create button to submit the inputted project title
    const submitProjectButton = document.createElement('button');
    submitProjectButton.textContent = 'Submit';
    submitProjectButton.setAttribute('id', 'submit');
    submitProjectButton.setAttribute('type', 'submit');
    selectBottomLeftContainer.appendChild(submitProjectButton);

    // DOM - make button to submit project clickable
    const clickSubmitButton = document.querySelector('#submit');
    clickSubmitButton.addEventListener('click', () => {
        console.log("submit button works");
    })
})
