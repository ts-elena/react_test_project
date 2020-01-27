Hi! Thank you for the code review.

You can start the app by running "npm start" as usual.
By default, you will see the user list.
Add "/loader" to the URL to access the loading screen.

The primary technologies/patterns used:
1. React.js + Typescript
2. Sass
3. Simplified 7/1 pattern for organizing the Sass stylesheets
4. Loadash debouncer for item loading

Some notes about technologies choices:
1. Instead of debouncer I also considered creating an Intersection observer plus React Lazy loading solution.
That could have saved me from importing the loadsh into the project, but I needed more time to put them together. I tried to create a custom React Intersection observer hook, but it did not behave the way I 
expected, so I decided to stick with the initial implementation. It is definitely worth to learn and I am planning to later.
2. Now the loading element can be accessed by "/loader" path, but not using React Routing. I created a temporary solution, so it is just a little more convenient to see both pages.
3. Animate Library. This app is not created with React Native and Animate seems to be a part of it. I used CSS
instead.  
