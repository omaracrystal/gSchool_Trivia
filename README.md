#gSchool Trivia#

##Description##
This game was my first project at gSchool. As you answer the trivia questions pertaining to programming your score increments up one point or down one point. You can also add your own questions to the question pool. 

This game will have the following:
  * **Spinner** = 6 categories (HTML, JavaScript, CSS, Git, Backend, Any)
  * **Trivia Question Form** = once the spinner stops on a category- A question associated with that category will appear with 3 choices.
  * **Score Card** = this card will keep track on how many questions have been answered correctly and incorrectly. You will earn a point for every correct answer and lose a point for every incorrect answer
  * **Question Contributor Form** = this form will allow anyone to contibute to the pool of questions.

##Technologies##
 * HTML5
 * CSS3
 * JavaScript
 * jQuery
 * Swig
 * NodeJs
 * Express
 * Gulp

#### Below is a picture of the Main Page, Trivia Pop-Up, Add Your Own Question Pop-Up and Navigation

**Main Page**                       |    |**Trivia Pop-Up**
:----------------------------------:|:--:|:----------------------------------:
![](/client/images/trivia.png)      |    | ![](/client/images/qForm.png)

**Add Your Own Question Pop-Up**    |    |**Navigation**
:----------------------------------:|:--:|:----------------------------------:
![](/client/images/addQ.png)        |    | ![](/client/images/navigation.png)


##Stretch Goals##
  * **Storage** for users and questions generated by the add question form.
  * **User Login** capabilities
  * **User Profile** page to see the questions they contributed, where they can update, delete or add new questions. Within the profile page they can also see their scores.
  * Implement a timer so that the player answers the questions quickly
  * **Web Sockets**: Two player game. After a user submits a new question, this question gets sent to the moderator of the game(admin or teacher) that can then review and accept or decline the question from being added to the main question pool. I would also like to add a flag in the bottom left corner if the player is certain the answer needs improvement or is actually incorrect. This question will then be passed into a “flag” array to be evaluated by the moderator again. Otherwise the question will be apart of that individual's question pool. 
  * Chat room and or Real time score updates from classmates
  * Add animation for a correct answer
  * User login through Github/ Facebook/ Twitter/ and or LinkedIn
  * Charts to visualize progress in certain categories of the game.
  * Make the trivia game customizable.
  * Testing with Jasmine/ Mocha Chai etc.
