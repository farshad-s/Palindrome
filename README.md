# Introduction

I created this website where you can check whether a word is a palindrome using HTML, CSS, and Vanilla JS

## How to use

I have explained what a Palindrome is for those who may not be aware.

It is a word, phrase, or sequence that reads the same backwards as it does forwards

e.g. noon or racecar

You write the word you want in the text holder, and click the button or press enter.

Underneath "Palindrome Checker" the word, phrase, or sequence will be displayed backwards.

If the word is a palindrome it will be displayed as green, otherwise it will be displayed as red.

## Technology I used

I used HTML and CSS, using my own style sheets (no framework).

I used JavaScript for the functionality.

The main aspects were using .split .reverse .join to make the input backwards and storing it in a variable, and to then compare if the original imput is the same as the input reversed, then displaying that on the screen.

I used .lowercase to bypass the error of the input not being displayed e.g. Mum backwards is muM - this was being displayed as not a palindrome.
