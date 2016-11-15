Sierra
* created the css file for the buttons and layout of the page
* edited the view html file
* made a logo
* worked on main page



# Team Sharp
Elias McSeveney

Marwan Johnstone

Kayla Ramos

Sierra Scott

[Site link](https://agile-meadow-72160.herokuapp.com/)
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
