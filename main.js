// Projects array
const projectsArray = [];

// Current project variable
let currentProject = "";

// Project factory
const ProjectFactory = (name) => {
    name = name;
    toDos = [];
    return {name, toDos};
}

// Function that pushes a new project to the projectsArray
addProjectToProjectsArray = project => projectsArray.push(project);

// Alert box opens up to create first project
do {
    const nameFirstProject = prompt('Create a name for your first project.  This name must not be blank.', 'Project1');
    const nameCurrentProject = nameFirstProject;

    // If project title is non-blank, create project using ProjectFactory and push it to projectsArray
    if (nameCurrentProject !== "") {
        currentProject = ProjectFactory(nameCurrentProject);
        addProjectToProjectsArray(currentProject);
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

// DOM - list of all document.querySelector's
const selectProjectsContainer = document.querySelector('#list-of-projects-container');
const selectListOfToDosContainer = document.querySelector('#list-of-todos-container');
const selectCreateNewProjectButton = document.querySelector('#create-new-project');
const selectCreateNewToDoItemButton = document.querySelector('#create-new-todo-item');
