# sfe-ola-oye

## Instructions to find and run an entry-point file.
entry-point file is the index.html, in it all importation to the index.css and index.js which can be found in the css and js folder respectively.
## Any assumptions you have made about any part of the assessment. It is good to explain your thought process and the assumptions you have made.
1. All data are been mock via a promise to emulate an api call for the project. 
2. I have a Func.js file inside the js folder to hold all the secondary function that doesnt need to run first, while index.js holds more important and urgent functions.
3. I am handling the filter via promise function as well as I filter using the input value from the search.
4. each auto complete thing holds an hidden input value so as too make it easy to fill in the search input.
5. the index.css holds all the css needed for the project. `#flexbox`
## Requirements that you have not covered in your submission if any.
none
## Instructions to configure and prepare the source code to build and run properly.
no special configuration is needed, just have internet to fetch the Flickity cdn lib.
## Issues you have faced while completing the assignment if any.
1. The autocomplete had to look for a lot of resources and all, as well as narrowing how large it could go (i.e. deboucing, lazyloading .etc.).
2. I had to determine if autocomplete and auto suggest were different or same, but autocomplete complete words typed, while auto suggest could be termed as showing words that contain the same reg as the one inputed.
3. Responsiveness and determining if i should use flexbox or css grid but well flexbox is faster 🚀
## Constructive feedback for improving the assignment.
quidax 😉