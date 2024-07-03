### Star Trek Quiz

The Star Trek Quiz is an interactive quiz consisting of 10 questions from the Star Trek Universe

## CONTENT LINKS

### [User Experience(UX/UI)](#user-experience)

- [User stories](#user-stories)
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Wireframes](#wire-frames)

### [Features](#features)

- [Overview](#overview)

### [Technologies Used](#technologies-used-1)

- [Languages Used](#languages)
- [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)

### [Testing](#testing-1)

- [Code validation](#code-validation)
- [Accessability](#accessability)
- [Testing Table](#testing-table)

## User Experience

The quiz is of a simple design consisting of 10 questions. At the end of the quiz the user will get a rank depending on their score. They can then retry the quiz if they like. 

### User Stories
As a user:
* I want the site to be simple and easy to navigate
* I want to be able to test my knowledge of the Star Trek universe.
* I want to be able to easily find the site in search engines.

### As a Developer:
As a developer:
* I want the user to easily navigate the site.
* I want the user to be challenged.
* I want the user to try again to achieve a higher rank.

### Color Scheme
The site consists of a background showing a picture of space. So I used text and bordering with the colour "Whitesmoke"

### Typography
The font used is easy to read and clear against the dark background
For the font I used the Google font, Raleway
Here is the link https://fonts.google.com/specimen/Raleway

### Wire frames

wire frames with pics-------------add pics to assets then import here---------------------------------

## Features

### Overview
![page overview](assets/readme/page-overview.png)
The website is fully responsonsive on all screen sizes



### Error Message
add this to full site ----------------------------------------------------



### Future Features
add future features --------------------------------------------------------------

## Technologies used

### Languages

<li>HTML 5</li>
<li>CSS</li>
<li>Javascript</li>

### Frameworks, Libraries and Programs

#### Google Fonts
I imported Google fonts and placed it in the style tag in the HTML file.
#### Favicon
For my Favicon, I used a Star Trek favicon from https://freefavicon.com/freefavicons/objects/iconinfo/star-trek-badge-152-203991.html

#### Github
I used Github to store my project and to deploy it.
#### Am I Responsive
I used the Am I responsive website to give a screenshot of how my site looks on various screen sizes. [See here](#friends-quiz)
#### Balsamiq
I used Balsamiq to create the wireframe for my project.

## Testing


### Code Validation

edit all of this below -----------------------------------------------------------

I used W3C Jigsaw to validate the CSS, which came back with no errors

I used W3C Markup to validate the HTML file, which returned no errors.
Document checking completed. No errors or warnings to show.

I used JSHint to validate the javascript code, which resulted in no errors

### Accessibility

To check the sites accessibility, I used Lighthouse in Dev Tools

Rules Page:
![Lighthouse Rules Page](assets/readme-files/lighthouse-rules-page.png)

Main Page:
![Lighthouse Main Page](assets/readme-files/lighthouse-main-page.png)

### Browser Testing

edit all this below -----------------------------------------------------------

To make the site responsive on all devices, I used Media queries. I started the development of the code on large screen devices which I quickly realised was wrong and changed to developing it with a "mobile first" approach, specifically The Galaxy Fold, whose screen size is 344 x 882px.

I had some issues with the length of the questions rendering properly as I used an image for the question container. To remedy this, I played back and forth with padding in dev tools and in two instances, I just had to re-write the question to make it shorter.

#### Unsolved Bugs:
if any add here ----------------------------------------------------

### Testing Table

edit all below ------------------------------------------------------------

| Feature:               | Expected outcome:                                                 | Pass/Fail: |
| :--------------------- | :---------------------------------------------------------------- | :--------- |
| Url address            | Landing/Rules Page                                                | Pass       |
| Rules Page             | Rules font is clear and legible                                   | Pass       |
| Begin Quiz Button      | Moves onto main landing page                                      | Pass       |
| Quiz Page              | 1st question renders                                              | Pass       |
| Quiz Page              | 4 possible answers to 1st q renders                               | Pass       |
| Shuffle Questions      | Each new round should have questions asked in a different order | Pass       |
| Answer Buttons Hovered | Change to color purple when hovered over                          | Pass       |
| Answer Button clicked  | Only allowed to click one answer                                  | Pass       |
| Wrong Answer           | Button turns red when wrong ans selected                          | Pass       |
| Correct Answer         | Button turns green to show correct answer                         | Pass       |
| Next Button clicked    | Question and answer options change                                | Pass       |
| Score Board            | Correct answers are tallied up and shown on score board           | Pass       |
| Media Player mute      | Media player is muted until user interaction with controls        | Pass       |
| Media Player play      | Theme tune plays at user set volume                               | Pass       |
| End Game popup         | Quiz Completed message                                            | Pass       |
| Next Game              | when questions reach 10, restart game                             | Pass       |
| Play Again             | Next Button changes to Play Again when game complete              | Pass       |
## Deployment
I used Gitpod to develop the code and then pushed to Github.

Here are the following steps I used to deploy the website from Github repository to Github Pages.

1. Log in to Github and find the repository you wish to deploy.
2. At the top of the page, click on "Settings".
3. On the left hand side of the settings page, under Code and automation, click on "Pages".
4. From the source section drop-down menu, select the Master Branch.
5. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

edit all below ------------------------------------------------------------

The live link can be found here:
[Friends Quiz](https://rdeswart.github.io/friends-quiz/)
## Credits
### Content
The wireframe was created using [Balsamiq](https://balsamiq.com/)

The Questions for the game were taken from https://www.chipublib.org/blogs/post/quiz-how-well-do-you-know-star-trek/

Quiz tutorial code from https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide

Font from [Google Fonts](https://fonts.google.com/)

Favicon from [Free Favicon](https://freefavicon.com/freefavicons/objects/iconinfo/star-trek-badge-152-203991.html)

