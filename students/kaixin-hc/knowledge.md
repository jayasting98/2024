## Frontend

### Rounded vs Square edges for signalling functionality

Researching whether to use rounded corners, sqared off corners, or fully rounded boxes was interesting from a usability perpective. Some resources I used to learn about them:

* https://ux.stackexchange.com/questions/40744/mixing-rounded-corners-and-square-corners
* https://medium.com/@carolinalina/how-to-design-ui-buttons-that-convert-d5ebb1080969
* https://prototypr.io/post/the-rounded-user-experience/

The information from https://uxdesign.cc/make-sense-of-rounded-corners-on-buttons-dfc8e13ea7f7 in particular made a case for fully rounded buttons for primary content when you have space to spare, to direct users attention to those buttons. They suggested to avoid fully rounded buttons when many are used next to each other as it may not be obvious which to click. I used this information to infer what the average user might takeaway if minimized panels were pills rather than rounded buttons.
### Vue

* https://v1.vuejs.org/guide/instance.html
* Scoped styles: https://vue-loader.vuejs.org/guide/scoped-css.html, also informing the issue I created [#1768](https://github.com/MarkBind/markbind/issues/1768) in MarkBind
* Learning about slots: https://learnvue.co/2021/03/when-why-to-use-vue-scoped-slots/#conclusion, https://www.smashingmagazine.com/2019/07/using-slots-vue-js/
### Scrollbars

Using overflow-x: scroll on the default navbar, seemed to cause the dropdown to break.

After a few stack overflow posts and reading, I found this article: https://css-tricks.com/popping-hidden-overflow/ that explains that setting `overflow-x` sets `overflow-y` as well, and it's just not possible to have a dropdown peep out of a scrollable overflow without setting positions relatively. [This discussion](https://www.sitepoint.com/community/t/css-drop-down-menu-hidden-behind-horizontal-scrollbar/367783) with the offered [solution](https://codepen.io/paulobrien/embed/vYxWppv?) was also interesting.

I briefly explored existing libraries like https://floating-ui.com/. Libraries like this exist to make it easier to accomplish this surprisingly complex task.

I also learned about the accessibility of scrollbars (https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html) and (https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/), which discussed what goes into making scrollbars accessible. Visually, visible scrollbars provide an obvious indication that there is more content. These design tips on scrollbars (https://www.nngroup.com/articles/scrolling-and-scrollbars/) were also interesting, particularly the note to avoid horizontal scrolling wherever possible. 

This informed my decision that it would be better not to make a scrollable navbar the default, but have a dropdown menu with more options for smaller screens

[::webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar) pseudo-element does not work for all browsers and should be used with caution.

## Open source dependencies

### ghpages

Used when researching the deploy and build commands for MarkBind.

* https://github.com/tschaub/gh-pages
### Commander

Used to write CLI programs.

* https://www.npmjs.com/package/commander
* https://en.wikipedia.org/wiki/Usage_message (conventions in defining parameters)
### jest

Mainly studied the changelog to see if this would break when dependencies were updated.

* Introduction: https://jestjs.io/ and repository(https://github.com/facebook/jest)
* relevant blog post: https://jestjs.io/blog/2021/05/25/jest-27 
* [changelog](https://github.com/facebook/jest/blob/main/CHANGELOG.md#2700)
* Jest testrunners: they plan on changing the default test-runner from `jasmine2` to `jest-circus` in version 27, with `jasmine2` [to be discontinued afterwards](https://jestjs.io/blog/2020/05/05/jest-26). Though I think we're using `jasmine2` and not `jest-circus`, but MarkBind we never explicitly specify a change from the default

### fs-extra

Handy utility that I ended up using extensively
* https://github.com/jprichardson/node-fs-extra
## Git

CI pipeline (particularly with git):
* https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration, particularly the section on [github actions](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration#about-continuous-integration-using-github-actions)
* Follow-up research about github actions
  * https://docs.github.com/en/actions/quickstart
  * https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
* Basic research about [Travis CI](https://travis-ci.org/) and [Netlify](https://www.netlify.com/)

## Logging Framework

* https://www.sentinelone.com/blog/logging-framework/ as an introduction
* https://se-education.org/se-book/errorHandling/#-12 also as an introduction
* https://github.com/winstonjs/winston (library used with markbind)

## Ways Versioning is Implemented

* Learn about semantic versioning: https://semver.org/
* Alternate versioning solutions:
  * https://github.com/jimporter/mike
  * https://docusaurus.io/docs/versioning

## Javascript

### Javascript with regard to object oriented programming

Looking into this was inspired by the issues on refactoring the large `core/site/index.js` file which is over 1.5k lines into more manageable class. At present, most of the file is made up of the `Site` class, which makes sense from an object oriented perspective. All the functions which are supported by Site are things which affect what the site itself holds or does: generating itself, deploying itself, initialising itself.

One suggestion for refactoring would be separating out each command into separate files. We could abstract away the command logic might be separating each command into classes, having each command inherit from a Command class, and having the site class just generate and execute each command when it is called to do so. But is this necessary or desirable?

Java and Javascript are different in that Java is class based and Javascript is prototype-based. Class based languages are founded on the concept of classes and instances being distinct, where classes are an abstract description of a set of potential instances which have the properties defined in the class - no more and no less. Prototype based languages have a 'prototypical object' which is the template used to create a new object, but once you create it or at run time the object can specify its own additional properties and be assigned as the prototype for additional objects (source: [mozilla, class-based vs prototype based languages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model))

Nevertheless, Site.js does use "classes" of managers to manage externals, etc, so perhaps in production avoiding classes is not a big deal. Would still be a useful abstraction to manage the complexity of the file. 

### Certain functions in javascript

<panel header="JavaScript forEach (and async loops)">

"JavaScript Array.prototype.forEach loop is not asynchronous. The Array.prototype.forEach method accepts a callback as an argument which can be an asynchronous function, but the forEach method will not wait for any promises to be resolved before moving onto the next iteration." ([Source](https://atomizedobjects.com/blog/javascript/is-javascript-foreach-async/)).

`forEach` does not look at what is returned, and won't handle the promise that an async function would return. Naturally, this means you cannot use async or await with it. The algorithm for forEach creates a loop that calls the callback function for each([StackOverflow Source](https://stackoverflow.com/questions/5050265/javascript-node-js-is-array-foreach-asynchronous), [more information about loops](https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript))

Instead, we could use map and the promise 'class' functions.

</panel>

<panel header="Javascript map can be destructive sometimes">

Just needed to note this, and consider other options. Refactoring my code allowed me to avoid destructively modifying the list.
[source](https://dev.to/lofiandcode/
can-map-mutate-the-original-array-yes-dmb)
</panel>


### Softwrapping vs hard wrapping code

After extensive reading, I am more familiar with the arguments for softwrapping code vs longwrapping code, as well as keyboard shortcuts for skilling to the next line in editors like vim which also affect developer preference. I liked [this article](https://jesseduffield.com/Hard-Wrap-vs-Soft-Wrap/).

In particular, I found the idea of semantic line breaks (single linebreaks being for your eyes only) in languages like HTML interesting. The argument for it(trivially rearranging items in a comma separated list, for example) was one I had not seen explicated before. While I am unlikely to adopt it, it also sheds light on why line-break problems are so common in MarkBind.


### CSS Vendor Locking:

In the past, different browsers used different prefixes for CSS properties, so developers would often extensively cover the available cases with prefixes. 

[Stylelint removes vendor prefixes](https://stackoverflow.com/questions/76144712/visual-studio-code-warning-also-define-the-standard-property-background-clip)

There is a danger for specific properties... eg [background-clip: text](https://stackoverflow.com/questions/75688924/background-clip-text-isnt-working-at-all-in-css) ... but for other cases in the markbind code, like `background-clip: padding-box`, it is no longer to prefix in order to obtain the desired behaviour.

Background reading on vendor prefixing: [Is vendor prefixing dead?](https://css-tricks.com/is-vendor-prefixing-dead/)

### Precommit hooks

Husky orchestrates Git hooks within Node.js environments, facilitating essential pre-commit and pre-push tasks such as code linting, testing, and formatting. This tool streamlines development workflows by automating quality assurance measures, thereby upholding codebase integrity and promoting team-wide adherence to established coding standards. David's lightning talk about this topic was helpful in teaching me about this topic.

[This PR also helped me learn about it as I read about the hook and what it did](https://github.com/godotengine/godot-docs/pull/9094). MarkBind also uses hooks.

### Ant design
Similar to material UI. No very notable observations, except that familiarity with at least one component design system seems to make picking up others much easier.

### Vue hydration
Incomplete or incorrect HTML structures can disrupt Vue's hydration process, particularly evident when essential elements like table tags are missing. This was occuring throughout MarkBind and actually there are still issues open relating to this like a strange double scroll effect in safari.

Vue relies on valid HTML structures to effectively bind data and update the DOM. Without proper tags, Vue's hydration mechanism may fail, leading to rendering issues or even component malfunctions. For instance, if table tags are omitted, Vue may struggle to properly interpret and render table-related components or directives, resulting in unexpected behavior or errors. 

Over time, browsers have become more robust; nevertheless despite my research I am not sure how often this propogates. The better solution might just be a linter to help make sure I write wellformed HTML for projects that also use vue...

### Project management

While harder to write about, I honed my instincts for project management and got a lot of hands on practice this semester. Some of my reflections are in observations.md