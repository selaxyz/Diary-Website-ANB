# DIARY WEB APPLICATION

This project is designed to help in learning fundamentals of web development like CRUD Operation and collaboration from sketching, design and development. This project cannot work without the help of the right tool such HTML, CSS, Javascript

> 🎯 Website: <a href="https://sela-diary-website.netlify.app/">Click Here</a>.



## Table of Contents

- [Technology Used](#technology-used)
- [Folder Structure](#folder-structure)
- [Feature Included](#feature-included)
- [Contributors](#contributors)
- [Usage](#usage)
- [Git Strategy](#git-strategy)
- [Acknowledgement](#acknowledgement)



## Technology Used
| **Technologies** | **Purpose** |
|------------------|------------------|
| HTML             | Structure and content of a webpage |
| CSS              | Styling HTML elements and layout |
| JavaScript       | Define website behaviour |


## Folder Structure
I use folder structure to organize our project and it is essential for maintaining clarity, scalability, and maintainability in software project.
```
project_root/
├── assets/
│   ├── images/
│   │   └── ... (image files)
│   ├── icons/
│   │   └── ... (font files)
│   └── ... (other asset files)
├── components/
│   ├── header.js
│   ├── footer.js
|   |── index.js   
│   └── ... (other component file)
├── script/
│   ├── index.js
|
├── style/
│   ├── Sub Style/
│   │   └── ... (index.css files)
│   ├── style.css
|
├── .gitignore
├── reviewboardrc
└── index.html  

```


### Description of Folders and Files

## Folder Structure

| Directory/File   | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| **assets/**      | Contains various asset files used in the project, including images (`images/`) and icons (`icons/`). Other asset types may also be included here. |
| **components/**  | Houses reusable components of the project. Key files include `header.js`, `footer.js`, and `index.js`, which likely serves as an entry point or aggregator for components. |
| **script/**      | Contains JavaScript files related to the project. `index.js` could serve as the main script entry point or contain global scripts.             |
| **style/**       | Holds CSS files used for styling the project. Subdirectories like `Sub Style/` may contain specific style files or configurations. `style.css` is likely a main stylesheet. |
| **.gitignore**   | Specifies files and directories to be ignored by version control (e.g., Git), ensuring only relevant files are tracked.                     |
| **reviewboardrc**| Configuration file for settings related to code review processes or tools.                    |
| **index.html**   | The main HTML file serving as the entry point for the web application or site.               |



## Feature Included

| Feature |
|------------|
| ✅ Display All Diaries and View Detail |
| ✅ Create New Diary |
| ✅ Update Diary  |
| ✅ Delete single or all diaries |

## Contributors

| **Contributor**     | **Responsibilities**                 |
|---------------------|--------------------------------------|
| **Bet Sela**        | Diary Web Developer                  |
| **Pav Munyphalla**  | Code Reviewer   |
| **Song Seyla**      | Code Reviewer                     |
| **Khom Khit**       | Code Reviewer     |
| **Panha Phosda**    | Code Reviewer              |
| **Chiv Sovanchitra**| Code Reviewer                        |
| **Rith Sokha Neadh** | Code Reviewer           |


## Usage

To start working on this project, follow these steps:

1. Clone the repository:
```
git clone https://git.clp.kr/anbschool/2nd/alphabeez/bet-sela/diary-website-sela.git

```


## Git Strategy & Scenario


For future development. In order to collaborate in this project effectively and we will give each member a separated 
space to work on their part we establish git-flow as branch management strategy.

**What is git-flow?**

It is an extension library created to establish collaborative work rules for smooth operation as there 
could be confusion due each team member 's when collaborating on a single project.

**Branch Strategy:**

We will set name for each branch and set its role for specific task 
to handle during the program development as below:
- **Main**: Used for deployment only when the program is ready for release.
- **Develop**: Used for ongoing development work.
- **Feature**: Used for adding new features or any modification.
- **Release**: Prepares the codebase for a new release.
- **Bugfix**: Addresses bugs identified during testing from QA.
- **Hotfix**: Addresses critical issues in the production code.

**Development with git-flow scenario**

**Scenario:**

> _We're developing a measurement conversion program allowing users to 
> convert Pound to Kilogram, Fahrenheit to Celsius, and Mile to Kilometre using python._


**Implementation**

**1. Preparing source project for development**

As a team leader of the project. I will start by preparing this step before collaboration:
- Create a project inside my computer
- Initialise local git repository
- Config username and email
- Create remote repo on Github, then copy the remote repo url
- Set up remote repo (or add alias) inside local repo
- Initialize git-flow in project source 
- Reflect the latest update(or push) the source project to remote 

**2. Add collaborators to Github repository**

In this step I will start by adding my team members to the repository I previously created, so they 
can start working on their part and send their update back to me using Github. This step involve:
- Add team member to the remote repository using there Github username or email
- Waiting them to accept the invitation to collaborate

**3. Opening issues on Github**

To conveniently assign specific task for team member to work on, I will follow this step:
- Open an issues on github and writing clear title and describe the task
For example:
    - Feature 1: Create a feature branch to implement Pound to Kilogram conversion.
    - Feature 2: Implement Fahrenheit to Celsius conversion.
    - Feature 3: Develop Mile to Kilometre conversion.
- Assign a team member that will be working on this task and add a label for this task. In this case, 
we want team members to add features to the source project, so we will use the ‘feature’ label.

**4. Feature Branches:**

The team members that have task assigned will start implement the feature describe below:

    - Feature 1: Create a feature branch to implement Pound to Kg conversion.
    - Feature 2: Implement Fahrenheit to Celsius conversion.
    - Feature 3: Develop Mile to Kilometre conversion.

To start implement the feature to the source project each 
team member will follow the step describe below:
- Clone the source project from the remote repository
- Reinitialize git local repository
- Config username and email
- Initialize git flow 
- Create feature branch using git flow and name the branch relevant to the feature working on (eg: feature-pound-to-kilogram)
- Modified the project source based on the requirement
- Checkout to develop branch and pull the latest update
- Merge or rebase feature branch with develop branch in case develop have different commit head
- Publish the branch to github using git flow
- Create pull request and wait for approval or track by admin
- Checkout to develop and pull the latest update
- Finish the feature branch using git flow
- Reflect develop in local to develop branch in remote


**5. Release Branches:**

Since our development team has completely implemented all the features required and tested 
all the features are working. So, it is time to release the project as it is time for the next release cycle.

As a team leader I will prepare as below:
- Pull the latest update from develop in remote repo
- Check the previous tag number to ensure I set the correct release tag
- Start the release branch and set the appropriate version (eg: 1.0)
- Publish the release branch to github 

To ensure everything is working before deployment, as a team leader I will prepare the 
project source for the QA team. After testing, QA informed me that the program crashes when 
trying to convert English characters to kilograms. 

As a team leader I will start taking this action as below:
- Open an issues on github and writing clear title and describe the task
For example:
QA_Bugfix 1: Program crashes when trying to convert english character to kilogram
- Assign a team member that will be working on this task and add a label for this task. In this case, 
we want team members to fix the release bug, so we will use the ‘QA’ & ‘bugfix’ labels.
	
To start fixing the bug in the release branch the team members will follow the step describe below:
- Track the release from the remote using git flow, to local
- Start bugfix branch from release using git flow
- Fix the issues informed by QA
- Checkout to release branch and pull the latest update
- Merge or rebase bugfix branch with release branch in case release have different commit head
- Publish the branch to github using git flow
- Create pull request and wait for approval, track or merged by admin
- Checkout to release branch and pull the latest update
- Finish the bugfix branch using git flow
- Delete the release branch from local, if there are no other issues

On the team leader side, after I merged the changes from bugfix branch to 
release branch in remote. I will start follow this step:

- Pull the latest update from release branch in remote
- Checkout to main and pull the latest update
- Checkout to develop and pull the latest update
- Finish the release branch using git flow
- Write commit message for merging release to main
- Write commit message for tag
- Write commit message for merging release to develop
- Reflect main, develop and push tag to remote


**6. Hotfix branch**

After we released the program to production, we noticed that there are critical issues that need to be 
addressed immediately. Some of our features are not working, which doesn't allow the user to use the feature.

As a team leader I will start taking this action as below:

- Open an issues on github and writing clear title and describe the task
For example:
    - Hotfix 1: The features are not working, which doesn't allow the user to use the program conveniently
- Assign a team member that will be working on this task and add a label for this task. In this case, 
we want team members to fix the production bug, so we will use the ‘hotfix’ label.
	
To start fixing the bug in the main branch the team members will follow the step describe below:
- Pull the latest update from main branch in remote
- Pull the latest update from develop branch in remote
- Pull tag from remote
- Check tag number
- Start hotfix branch from main and set appropriate tag number
- Fix the issues informed by team leader
- Checkout to main branch and pull the latest update
- Merge or rebase hotfix branch with main branch in case main have different commit head
- Publish the branch to github using git flow
- Create pull request and wait for approval, track or merged by admin
- Checkout to main branch and pull the latest update
- Checkout to develop branch and pull the latest update
- Finish the hotfix branch using git flow
- Write commit message for merging hotfix to main
- Write commit message for tag
- Write commit message for merging hotfix to develop
- Reflect main, develop and push tag to remote

## Acknowledgement
Thank you to the team members of AlphaBeez for their invaluable contributions to code review, which have greatly enhanced the quality and fulfillment of this project.