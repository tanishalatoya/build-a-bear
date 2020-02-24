# Build-A-Bear
**Created by:** [Erin Campbell](https://github.com/ebcampbell) and [Tanisha L. Davey](https://github.com/tanishalatoya)

### Description:
In this application, on initial use a user is encounters an "undressed" bear with several button options that allows the user to dress the bear up as desired. Additionally, there is a section of buttons that can change the bear's background upon the associated button click. Once a user has dressed the bear to their liking, the user can then save the outfit created by naming their outfit and clicking the save button. This then creates a card holding the clothing selections and/or background selection chosen by the user. The cards persist on page refresh and when a user closes the browser and then reopens it back up to the application, using the browser's local storage. Thus, a user can then click any of their saved cards to redress the bear in the outfit associated with the card. A user is also able to delete any or all of their outfit cards as needed.

### Screenshots of our application:
_Default state a user sees before interacting with the app on page load_

![screencapture-file-Users-tanishadavey-Desktop-turing-mod-1-projects-build-a-bear-index-html-2020-01-07-19_09_14](https://user-images.githubusercontent.com/41553045/71944567-67c92880-3181-11ea-83d3-6fc14c1ec462.png)

_After a user has dressed the bear prior to saving the current dressed up bear_

![screencapture-file-Users-tanishadavey-Desktop-turing-mod-1-projects-build-a-bear-index-html-2020-01-07-19_12_27](https://user-images.githubusercontent.com/41553045/71944637-a9f26a00-3181-11ea-956f-90f721253c3f.png)

_After a user has saved a few outfits_

![Screen Shot 2020-01-08 at 3 41 17 PM](https://user-images.githubusercontent.com/43975806/72022345-68b79400-322d-11ea-8983-0bea3b9a1a85.png)



### Things learned during this project:
1. When to use local variables vs. global variables.
1. Itermediate git workflow
1. Creating smaller functions focused on doing one job only
1. Using classes/objects to scope functionality
1. Storing objects in local storage in order for items to persist on page load/reload

### Opportunities for refactor _-or-_ Items to include in future iterations:
* **Refactor:** redressBear function is long because it's doing the same thing multiple times and if we were to refactor we could write smaller functions and use those as helper functions within this function.

* **Refactor:** Next time thing about how to better utilize methods on the outfit object.

* **Future iteration:** In the container containing the cards with the bear's saved outfits, a `clear all button` can be implemented to remove all the saved outfits simultaneously. This would remove the key associated with the array holding all the saved outfit cards from the browser's local storage.

* **Future iteration:** In the container containing the cards with the bear's saved outfits, the cards can be prepended to display the last saved outfit first.

* **Future iteration:** Add functionality so that when a user clicks on a previously saved outfit it appears on the bear _and_ the user can then edit the outfit, click the save button and see that the outfit is permanently updated (including in local storage).


