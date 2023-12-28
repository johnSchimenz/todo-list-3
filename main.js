// Projects array initialized
const projectsArray = [];

// Current project variable initialized
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

        // DOM - Make first project created clickable
        const clickFirstProject = document.querySelector('.project');
            clickFirstProject.addEventListener('click', () => {
                currentProject = projectsArray[0];
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

// DOM - describes what happens when Create New Project Button is clicked
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

    // DOM - make Submit button for a project clickable
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

                // DOM - updates currentProject to last clicked project and displays that project's ToDo Items
                for (let i = 0; i < projectsArray.length; i++) {
                    if (project.textContent === projectsArray[i].name) {
                        currentProject = projectsArray[i];

                        const displayCurrentProjectToDoItems = document.createElement('div');
                        displayCurrentProjectToDoItems.textContent = currentProject.name;
                        displayCurrentProjectToDoItems.setAttribute('class', 'todo-item-display');
                        selectListOfToDosContainer.appendChild(displayCurrentProjectToDoItems);
                    }
                }
            });
        });

        // DOM - Re-enable Create New Project Button so it's clickable again
        clickCreateNewProjectButton.removeAttribute('disabled');
    })
})

// DOM - describes what happens when Create New ToDo Item Button is clicked
clickCreateNewToDoItemButton.addEventListener('click', () => {
    
    // DOM - Temporarily disable Create ToDo Item Button so it's not double-clicked
    clickCreateNewToDoItemButton.setAttribute('disabled', 'disabled');

    // DOM - create fieldset to submit newest ToDo item
    const fieldsetToDoItem = document.createElement('fieldset');
    selectBottomRightContainer.appendChild(fieldsetToDoItem);

    // DOM - create input boxes and labels for ToDo items
    for (let i = 0; i < arrayToDoArguments.length; i++) {

        // DOM - create containers for each input and label pair and make selectable
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

    // DOM - Create Submit button to submit the newest ToDo Item information
    const submitToDoItemButton = document.createElement('button');
    submitToDoItemButton.textContent = 'Submit';
    submitToDoItemButton.setAttribute('id', 'submit-todo-item');
    submitToDoItemButton.setAttribute('type', 'submit');
    fieldsetToDoItem.appendChild(submitToDoItemButton);
    
    // DOM - make Submit button to submit ToDo Item clickable
    const clickSubmitToDoItemButton = document.querySelector('#submit-todo-item');
    clickSubmitToDoItemButton.addEventListener('click', () => {

        // Initialize array for all inputBox values
        const arrayToDoInputBoxes = [];

        // Push all newest ToDo Item inputBox's to arrayToDoInputBoxes array
        for (let i = 0; i < arrayToDoArguments.length; i++) {
            let inputBoxText = document.querySelector('#' + arrayToDoArguments[i]);
            arrayToDoInputBoxes[i] = inputBoxText.value;
        }

        // Create new ToDo Item object using ToDoFactory... I don't like how this is hard-coded
        let newestToDoItem = ToDoFactory(
            arrayToDoInputBoxes[0], 
            arrayToDoInputBoxes[1], 
            arrayToDoInputBoxes[2], 
            arrayToDoInputBoxes[3], 
            arrayToDoInputBoxes[4], 
            arrayToDoInputBoxes[5]);
        
        // Push newest ToDo Item to currentProject and update projectsArray
        console.log('projectsArray is ');
        console.log(projectsArray);
        currentProject.toDos.push(newestToDoItem);
        console.log('Now, projects array is ');
        console.log(projectsArray);
        
        /*
        for (let i = 0; i < projectsArray.length; i++) {
            if (projectsArray[i].name === currentProject.name) {

                console.log('Previous projectsArray is ');
                console.log(projectsArray);

                // projectsArray[i] = currentProject;

                console.log('Now projectsArray is ');
                console.log(projectsArray);

            }
        }
        */

        // DOM - Remove Submit button and inputBox's for ToDo Item
        selectBottomRightContainer.removeChild(fieldsetToDoItem);

        /*
        // DOM - Resets display of ToDos on right side of the webpage - NOT WORKING
        let countToDoItems = selectListOfToDosContainer.childElementCount;

        for (let i = 0; i < countToDoItems; i++) {
            const selectToDoItem = document.querySelector('.todo-item-display');
            selectListOfToDosContainer.removeChild(selectToDoItem);
        }

        // DOM - Displays all of project object's toDos
        const displayCurrentProjectToDoItems = document.createElement('div');
        displayCurrentProjectToDoItems.textContent = currentProject.toDos;
        selectListOfToDosContainer.appendChild(displayCurrentProjectToDoItems);
        */

        /*
        // DOM - Updates display of projects on left side of the webpage
        displayProjects(projectsArray);

        // DOM - Make display of project buttons on left side clickable
        const clickProjects = document.querySelectorAll('.project');
        clickProjects.forEach((project) => {
            project.addEventListener('click', () => {
                console.log('test worked');
            });
        });
        */

        // DOM - Re-enable Create New Project Button so it's clickable again
        clickCreateNewToDoItemButton.removeAttribute('disabled');
    })
    
})