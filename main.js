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
        const project = document.createElement('button');
        project.textContent = array[i].name;
        project.setAttribute('id', 'project' + i);
        project.setAttribute('class', 'project');
        selectProjectsContainer.appendChild(project);
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

        // DOM - Make display of project buttons on left side clickable
        const clickProjects = document.querySelectorAll('.project');
        clickProjects.forEach((project) => {
            project.addEventListener('click', () => {
                console.log(project.textContent);
            });
        });
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

// Array that lists all of the ToDo arguments
const arrayToDoArguments = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];

// DOM - make Create New Project Button clickable
clickCreateNewProjectButton.addEventListener('click', () => {

    // DOM - Temporarily disable Create New Project Button so it's not double-clicked
    clickCreateNewProjectButton.setAttribute('disabled', 'disabled');

    // Create input box to type in new project title
    const inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('id', 'newest-project');
    inputBox.setAttribute('name', 'newest-project');
    selectBottomLeftContainer.appendChild(inputBox);

    // DOM - Create button to submit the inputted project title
    const submitProjectButton = document.createElement('button');
    submitProjectButton.textContent = 'Submit';
    submitProjectButton.setAttribute('id', 'submit');
    submitProjectButton.setAttribute('type', 'submit');
    selectBottomLeftContainer.appendChild(submitProjectButton);

    // DOM - make Submit button to submit project clickable
    const clickSubmitButton = document.querySelector('#submit');
    clickSubmitButton.addEventListener('click', () => {

        // Takes value in inputBox, creates project, and adds it to projectsArray
        const inputBoxText = document.querySelector('#newest-project');
        let newestProject = ProjectFactory(inputBoxText.value);
        addProjectToProjectsArray(newestProject);

        // DOM - Remove Submit button and inputBox
        selectBottomLeftContainer.removeChild(submitProjectButton);
        selectBottomLeftContainer.removeChild(inputBox);

        // DOM - Resets display of projects on left side of the webpage
        for (let i = 0; i < projectsArray.length - 1; i++) {
            selectProjectsContainer.removeChild(selectProjectsContainer.firstElementChild);
        }

        // DOM - Updates display of projects on left side of the webpage
        displayProjects(projectsArray);

        // DOM - Make display of project buttons on left side clickable
        const clickProjects = document.querySelectorAll('.project');
        clickProjects.forEach((project) => {
            project.addEventListener('click', () => {
                console.log('test worked');
            });
        });

        // DOM - Re-enable Create New Project Button so it's clickable again
        clickCreateNewProjectButton.removeAttribute('disabled');
    })
})

// DOM - make Create New ToDo Item Button clickable
clickCreateNewToDoItemButton.addEventListener('click', () => {
    
    // DOM - create fieldset to submit newest ToDo item
    const fieldsetToDoItem = document.createElement('fieldset');
    selectBottomRightContainer.appendChild(fieldsetToDoItem);

    // DOM - create input boxes and labels for ToDo items
    for (let i = 0; i < arrayToDoArguments.length; i++) {

        // DOM - creat containers for each input and label pair and make selectable
        const pairLabelInputContainer = document.createElement('div');
        pairLabelInputContainer.setAttribute('id', 'container' + i);
        fieldsetToDoItem.appendChild(pairLabelInputContainer);
        const selectPairLabelInputContainer = document.querySelector('#container' + i);

        // DOM - create labels
        const labelInputBox = document.createElement('label');
        labelInputBox.setAttribute('for', arrayToDoArguments[i]);
        labelInputBox.setAttribute('name', arrayToDoArguments[i]);
        labelInputBox.textContent = arrayToDoArguments[i];
        selectPairLabelInputContainer.appendChild(labelInputBox);
        
        // DOM - create input boxes
        const inputBox = document.createElement('input');
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('id', arrayToDoArguments[i]);
        inputBox.setAttribute('name', arrayToDoArguments[i]);
        selectPairLabelInputContainer.appendChild(inputBox);
    }

    // DOM - Create button to submit the newest ToDo Item information
    const submitToDoItemButton = document.createElement('button');
    submitToDoItemButton.textContent = 'Submit';
    submitToDoItemButton.setAttribute('id', 'submit-todo-item');
    submitToDoItemButton.setAttribute('type', 'submit');
    fieldsetToDoItem.appendChild(submitToDoItemButton);
    

})