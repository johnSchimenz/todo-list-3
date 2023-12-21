// Projects array
const projectsArray = [];

// Current project variable
let currentProject;

// Project factory
const ProjectFactory = (name) => {
    name = name;
    toDos = [];
    return {name, toDos};
}

// Function that pushes a new project to the projectsArray
addProjectToProjectsArray = project => projectsArray.push(project);

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
