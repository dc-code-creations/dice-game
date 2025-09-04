Here is the README file for my Dice Game. This is where I will put sources, thoughts and ideas for how to solve this problem as I go


How to prevent page from refreshing: 
  - tried using preventDefault(), but that didn't seem to work; could be putting the event listener on the wrong action
  - https://stackoverflow.com/questions/39411803/prevent-user-from-refreshing-the-page
      - console log saying default behavior has been prevented and random number between 1 and 6 is generated, but console is cleared immediately after, so page refresh is not being completely stopped
      - page is showing error saying "blocked attempt to show 'beforeunload' confirmation panel for a frame that never had a user gesture since it's load"
          - clicking on the page seems to allow the beforeload confirmation panel to show up; so you can cancel the reload manually, but not sure how to prevent the popup from showing at all
  - decided to leave rolling on refresh alone and to just roll on click instead and use refresh to start a new game; seems better functionally to me anyways