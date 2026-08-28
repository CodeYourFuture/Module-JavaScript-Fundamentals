# Git Collaboration

## Learning Objectives

<!--{{<objectives>}}>-->

- [ ] Collaborate with colleagues using Git
<!--{{<objectives>}}>-->

It's very unlikely that you will be the only person working with a Git repository. We have already practised creating branches and merging on our own during the prep, now we will do it with another person.

**You will need to find a partner for this exercise**. If you have an odd number of people in your cohort you can work in a three, the important thing is that you work on a different repository for parts 1 and 2.

## Instructions

### Part 1 - Creating the repository

1. Create a new directory called `animal-website` and an `index.html` file inside it.
2. Initialise a Git repository and commit the empty file.
3. Create a repository on GitHub and link it to your local repository
4. Populate `index.html` file with some information about your favourite animal. You should include:
   - A title
   - Two or three sentences about the animal. You can copy something from the internet if you like.
   - A picture of the animal
   - An unordered list with three facts about the animal, eg. its habitat, its diet, etc
5. Remember to commit your changes often!
6. When you have built the site push the changes to GitHub and send the repository's url to your partner.
7. You will need to add your partner as a collaborator on your repository before they can push to it. Click the `Settings` tab on the repository page then go to the `Collaborators and teams` page, then click `Add people` and enter your partners username. They will get an invite which they need to accept.

### Part 2 - Collaborating

1. Accept the invitation to collaborate from your partner
2. Clone the repository to your computer
3. Create a branch called `add-css`. Check that you are now working on your new branch.
4. Create a `styles.css` file and add it to `index.html` using a `<link>` element.
5. Add the following styling to the page:
   - Change the background colour
   - Change the font
   - Center the title
   - Add a border to the image
6. Remember to commit after each change!
7. Push your branch to GitHub
8. Create a pull request asking to merge your branch to `main`

### Part 3 - Merging

1. At this point your partner should have created a pull request. Merge the changes into your `main` branch.
2. **If you see a message about merge conflicts stop here**. That means something has gone wrong somewhere in this process. Post a message in Slack to ask for help.
3. You can **pull** the changes to your laptop to see what's different in the website. Click the three dots next to teh repository name in the source control tab and click "pull".

If you see your partner's changes in your browser then everything has worked, well done! If not then you can post in Slack and ask for help, or speak to a volunteer in class. You should definitely speak to your partner and make sure nobody missed anything while working through the exercise.