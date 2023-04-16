# Flashcard Generator

This is a ReactJS based project that allows users to create, display and view flashcards. The project utilizes Redux for state management, Formik & Yup for form handling and validation and Tailwind CSS for styling.

# Components
CreateFlashcard
This component allows users to create new flashcards by filling out a form that includes input fields. Upon submission, the flashcard is added to the list of existing flashcards.

DisplayFlashcard
This component displays the list of existing flashcards. Each flashcard is displayed in a card format. Users can delete a flashcard by clicking on a delete button associated with each card.

ViewCards
This component allows users to view their flashcard terms. Users can navigate between cards using left and right arrow buttons.

Local Storage
The project uses local storage to store flashcards created by the user. This means that even if the user closes their browser or navigates away from the page, their flashcards will be saved and available the next time they visit the site.

# Description

Icreated this project with the help of Front-end technologies called HTML, tailwind CSS and JS library i.e., React JS ,redux-toolkit and also used some of the libraries called Formik and Yup for React form validation.
This project contains 3 main components 
1. Navbar : This is common for all the components.
2. Create New : It is used to create multiple number of flashcards.
3. My flashcards : In this component we can see all flashcards which are created.
4. View card : By clicking on particular card in My-flashcards component, it will navigate to view card details page.
5. Modal : It is used to show sharable links and we can easily copy browser URL by clicking on copy icon.

## Built With

Front-End Development : React JS,redux-toolkit, HTML, Tailwind CSS and Good Amount of Javascript.

## Getting Started

To get a local copy up and running... follow these simple example steps.

## Prerequisites

Node Should Be Installed in Your System.

## Installation

Use clone method or download project using ZIP file in your your computer.

Open project in vs code and follow the below steps in Vs terminal to install node-modules.

Method 1. Using downloaded ZIP file from GITHUB. 
      
1.Install node-modules

bash
npm install


2.Change directory

bash
cd <project-name>


3.Excution command (it will open localhost server)

bash
npm start


Method 2. Using clone method.

1.Clone the repository

bash
git clone https://github.com/github_username_/project-name.git


2.Install NPM packages

bash
npm install


3.Excution command

bash
npm start


Note:

If you are not able to use Tailwind CSS, open official Tailwind CSS website and Follow the steps to set up for React environment.

## Authors

- @krishna singh

## Acknowledgements

- [React Icons](https://react-icons.github.io/react-icons/)
- [Font Awesome](https://fontawesome.com/)
- [Formik for form handling](https://formik.org/docs/overview)
- [YUP for form validation](https://www.npmjs.com/package/yup)
- [Redux-toolkit for state management](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)