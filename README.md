[Site link](https://agile-meadow-72160.herokuapp.com/)

# Team Sharp
Elias McSeveney, Kayla Ramos, Marwan Johnstone, Sierra Scott

# Team Progress (Iteration 4)
Elias
* Cleaned up display of current progression and chosen song.
* Added a 'random' functionality. When the user chooses a key but not
a progression, a song will be generated using a random progression from the dropdown.

Kayla
* Implemented the Freelancer theme, but there still some issues with how it is supposed to work.
* There is an error involving scrollspy that I was informed was okay to ignore.
* Turned our app into a one-paged application, so all of our views have been moved to home.client.view.html
* Edited the How-to page to include picture references to how the user is supposed to use our app.
* Deleted some files that were just causing errors
* Worked with Sierra to clean up some layout space issues and implement how-to images
* Made the random work in the view, I got rid of of the issue where both the create and random button were doing the same things and was able to make the random button act exteriorly like the create button

Marwan
* added a random button to the main html view and grouped buttons together, fixed formatting

Sierra
* worked with the format of the new bootstrap theme
* customized the bootstrap theme with new colors and added the logo
* changed the font sizes and colors
* edited the buttons

![](/README images/Screen Shot 2016-12-16 at 11.05.00 AM.png)
![](/README images/Screen Shot 2016-12-16 at 11.05.24 AM.png)

# Team Progress (Iteration 3)
Elias
* Consolidated the dropdown controllers into a single one in order to
allow calculation of the appropriate progression for the user.
* The create button will now show the selected chord progression in the selected key.

Sierra
* fixed the buttons and layout
* changed colors and the sidebar
* updated header to say 'SHARP'

Kayla
* Added a sidebar, collapsible create button, and buttons on the top bar for the 'How To' and 'About' pages.
* Fixed small spacing and ordering errors
* 'About' and 'How-To' pages have correlating html files now which will be polished later
* Deleted Calendar and Articles modules

Marwan

* Edited main view html and used Bootstrap to create two drop down buttons which pull data from appropriate controllers. I did this for both the key and progression dropdowns. I also edited the controllers to save the user's click into a variable "current" for the vm object. This will be used in order to create songs in another controller later on. (11/17/16)

![](/README images/iteration3.png)


# Team Progress (Iteration 2)
Sierra
* created the css file for the buttons and layout of the page
* edited the view html file
* made a logo
* worked on main page

Elias
* Worked with Marwan to create controllers (all changes to which were pushed under his Github account)
* Added screenshot to readme

Kayla Ramos
* Added a variety of buttons to start working on the layout of main page and basic functionality

Marwan Johnstone
* Worked with Elias to create controllers for key and progression dropdown buttons. The controllers both use vm instead of binding to $scope. Also edited the html view to incorporate the module and its controllers, added some code to output the selected key and progression to test functionality of controllers. (11/14)

![](/README images/Screen Shot 2016-11-14 at 8.01.05 PM.png)

# Team Progress (Iteration 1)
* Only problem with calendar module is when signing in on calendar page it redirects back to an empty calendar. Once refreshed, all correct events and other info appears.

* Edited syntax errors. Added makeClassName function to calendar.client.controller, the function determines whether or not the event is private or public, and changes the classname appropriately. Edited calEvent.find() lines in server controller that populate the calendar with a list, set both priv attributes to false in order to pull all public events. - Marwan & Kayla (10/31)

* Edited calendar module client controller (modules/calendar/client/controllers/calendar.client.controller.js), edited addEvent() function in the file to take a boolean paramater isPrivate in order to determine whether or not the event to be added is private or public. Added a new attribute to the newEvent object called private, which holds the boolean value for privacy. Updated the className attribute in the newEvent object to hold the boolean value in order for the event DOM to determine privacy and allow for variation in display for CSS. - Marwan (10/30/16)

* Changed addEvent attribute to priv instead of private - Marwan (10/30)

* Modified listing functionality in the server controller (modules/calendar/server/controllers/cal-events.server.controller.js) so that it queries the database. - Elias (10/31/16)

* Modified the creation of events in the server controller so that private events have a user object attached to them (if they don't, a 403 error will be returned). - Elias (10/31/16)

* Edited the view to show a private event button when logged in and provided the boolean for isPrivate that is used in the client controller. - Kayla (10/30)

* Created server tests for 'should  be able to get a single private calendar event if logged in' and 'should be able to get a list of private calendar events if logged in' -Kayla and Marwan (10/31)

# Team progress (initial set up, 10/24)

* Calendar module added on 10/24 by Kayla Ramos. So far just the bare bones module downloaded.
