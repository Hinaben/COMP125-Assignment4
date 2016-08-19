/**
 * FileName: app.js
 *
 * @author Hina Patel
 * @date August 19, 2016
 *
 * StudentID: 821021425
 * Assignment 4 - JavaScript Banner Ad
 * website: http://comp125-assignment4-821021425.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var keySkillsLabel;
    var techSkillsLabel;
    var viewProfileBtn;
    var keySkills = [];
    var techSkills = [];
    var stopAd = false;

    //tech skills
    techSkills[0] = "C#";
    techSkills[1] = "C";
    techSkills[2] = "JavaScript"
    techSkills[3] = "Shell Script";
    techSkills[4] = "Database Design";
    techSkills[5] = "SQL"
    techSkills[6] = "Bootstrap";
    techSkills[7] = "SDLC";
    techSkills[8] = "CreateJS";
    techSkills[9] = "Linux";


    //key skills
    keySkills[0] = "Web Design";
    keySkills[1] = "Object Oriented Programming";
    keySkills[2] = "SDLC Methodologies";
    keySkills[3] = "Database Design";
    keySkills[4] = "Linux";

    /*   
    * Initialize the canvas setting
    * 
    * @function init
    * @returns {void}
    */
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 5; // 60 frames per second
        createjs.Ticker.on("tick", playAd); // call playAd every frame
        designAd();
    }

    /*   
     * This function is to paly Ad
     * 
     * @function playAd
     * @returns {void}
     */
    function playAd() {
        var skillIndex = Math.floor((Math.random() * 10));
        keySkillsLabel.x += 5;
        techSkillsLabel.x += 5;
        // animation move for key skills
        if (keySkillsLabel.x >= 250) {
            keySkillsLabel.x = 0;
            keySkillsLabel.text = keySkills[skillIndex];
            if (skillIndex > 4) {
                keySkillsLabel.text = "Software Solution Expert";
            }
        }

        // animation move for tech skills
        if (techSkillsLabel.x > 250) {
            techSkillsLabel.x = 150;
            techSkillsLabel.text = techSkills[skillIndex];
        }
        if (stopAd != true) {
            stage.update(); // refresh the stage container
        }
    }

    /*   
  * This function is to add viewProfile Image to the canvas
  * 
  * @function addViewProfile
  * @returns {void}
  */
    function addViewProfile() {
        var viewProfile = new createjs.Bitmap("/Content/images/bg.png");
        viewProfile.addEventListener('click', onViewProfileClick);
        stage.addChild(viewProfile);
    }

    /*   
  * This function is to handle onViewProfile Click
  * 
  * @function onViewProfileClick
  * @returns {void}
  */
    function onViewProfileClick() {
        console.log('View Profile Clicked!');
        stopAd = true;
        window.open("http://comp125-assignment3.azurewebsites.net/");
    }

    /*   
 * This function is to add skills label for ad animaiton
 * 
 * @function addSkillLabel
 * @returns {void}
 */
    function addSkillLabel() {
        keySkillsLabel = new objects.Label("Software Solution Expert", "20px Consolas", "#000000", 150, 60, true);
        techSkillsLabel = new objects.Label("SDLC", "20px Consolas", "#000000", 200, 150, true);
        stage.addChild(keySkillsLabel);
        stage.addChild(techSkillsLabel);
    }

    /*   
 * This function is to design ad banner
 * 
 * @function designAd
 * @returns {void}
 */
    function designAd() {
        addViewProfile();
        addSkillLabel();
        stage.update();

    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();