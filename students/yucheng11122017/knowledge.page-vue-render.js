
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('p',[_v("Since every new feature in Markbind required unit testing, I had to create unit tests for the scroll top button component. Therefore, I had to learn how to use Vue Test Utils and its snapshots.\nI had to learn how to")]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('p',[_v("As I worked on some front end bugs, I had to learn more about CSS. Specifically:")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('p',[_v("As I did a typescript migration, I learnt to code in it. Specifically")]),_v(" "),_m(10),_v(" "),_c('p',[_v("I learnt about the simliarity index about github files. According to the typescript migration documentation, there was a need to have two seperate commits, one to rename and one to adapt. If both were done within one commit, the simliarity index would be below the threshold and the commit history would be lost. This is something that I would definitely take note of in the future when renaming files.")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("I learnt about Node.js versioning when upgrading the Node version and when writing the documentaiton on migrating Node js. For example, odd numbered Node.js versions are unstable and will reach end of life sooner, while even numbered Node.js version will be maintained for a longer period. I also learnt the difference between a major release and minor release, with the "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Eg. 1.0.0 to 2.0.0")]},proxy:true}])},[_v("former increasing the first number")]),_v(" and containing major and breaking changes, while the later has smaller changes which are not breaking.")],1),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_c('p',[_v("There was an issue with Markdown using include within another include, because the outer variable was overriding the inner variable. This causes a cyclical reference error. I was told that this was inline with the golden principle of reuse, where inner variables should be allowed to override the inner variables so that components can be reused without having to change the inner contents.")]),_v(" "),_m(20),_v(" "),_c('p',[_v("I learnt about the importance of good documentation and how to manage documentation. I think it is quite easy to keep adding things into documentation but it is more important to be able to present information in a way that is presentation and pallatable to users. For example, Markbind had an issue with cyclical references in includes and it would be good to document this. However, since it was an edge case, it was recommended to instead use a panel which was not as noticable so users could easily skip over it if not applicable to them.")])]),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(21)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"vue-components"}},[_v("Vue components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-components","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Since Markbind uses Vue components, I had to pick this up, having only experience with React before. I had to learn what is a Vue instance, how to compile Vue and so on.\nResources I used included the Markbind dev page regarding "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/design/serverSideRendering.html"}},[_v("SSR")]),_v(" of course, the "),_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html"}},[_v("Vue Official Documentation")]),_v(" and "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/design/serverSideRendering.html"}},[_v("another Vue tutorial")]),_v(".\nThis was especially useful when dealing with Vue templates in one of my PRs about jQuery, which logged an warning since there was a script tag in the template. I had to learn about side effects in Vue from resources such as this "),_c('a',{attrs:{"href":"https://github.com/vuejs/vue/issues/11697"}},[_v("stackflow post")]),_v(" about Vue disallowing side effects for not just script tags but also style tags.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"vue-test-utils"}},[_v("Vue test utils"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-test-utils","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("deal with setTimeout. This was probably the hardest part as trying to mock the setTimeout (following this "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/67981140/how-to-test-settimeout-function-calld-in-vue-created-hook-using-vue-utils-jes"}},[_v("tutorial")]),_v(") and using nextTick (using this "),_c('a',{attrs:{"href":"https://dmitripavlutin.com/vue-next-tick/"}},[_v("tutorial")]),_v(") on Vue test did not work. I had to resort to using setTimeout in the test to wait out the setTimeout in the component.")]),_v(" "),_c('li',[_v("mount components with props and attached to a document")]),_v(" "),_c('li',[_v("dispatch events to trigger the scroll event needed for the scroll top button component")]),_v(" "),_c('li',[_v("test if a function has been called")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"jquery-cheerio-and-javascript-for-dom-manipulation"}},[_v("Jquery, Cheerio and Javascript for DOM manipulation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jquery-cheerio-and-javascript-for-dom-manipulation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("As I had to write a plugin and remove jQuery, I became a lot more familiar with DOM manipulation using Cheerio, jQuery and vanilla Javascript. Since I had to remove jQuery from Markbind, this "),_c('a',{attrs:{"href":"https://youmightnotneedjquery.com/"}},[_v("page")]),_v(" was very useful for me to understand how to convert from jQuery to vanilla Javascript. I also learnt from the "),_c('a',{attrs:{"href":"https://api.jquery.com/"}},[_v("jQuery API documentation")]),_v(" about each functions' behavior, especially more advanced functions like wrap and on. Through this PR, I became more familiar with using vanilla Javascript for DOM manipulation as well. For example, how to create elements, add styling and scroll etc.\nBecause the contact form plugin required DOM manipulation, I used cheerio for this PR and learnt about its API calls. The "),_c('a',{attrs:{"href":"https://cheerio.js.org/"}},[_v("cheerio API documentation")]),_v(" was very helpful in my understanding of the calls.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"css"}},[_v("CSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("How styles override each other. The iconColor in bozes are not working in certain circumstances due to Bootstrap styling. Hence, I had to learn more about overriding in CSS styles. This "),_c('a',{attrs:{"href":"https://www.tutorialspoint.com/Rules-to-override-Style-Sheet-Rule-in-CSS"}},[_v("guide")]),_v(" was useful in teaching me about it and I also about the "),_c('a',{attrs:{"href":"https://www.w3schools.com/css/css_important.asp"}},[_v("important property in CSS")]),_v(" which was what was causing the bug")]),_v(" "),_c('li',[_v("Transitions. The panel transition had some errors with an abrupt transition, which was a bug regarding the CSS transitions. I learnt about how CSS transitions from 0 to the max-height, and if the max-height was not set correctly (in this case it did not include margins) there would be problems.")]),_v(" "),_c('li',[_v("CSS selectors. As I had to style the form plugin and also had to finish up a PR regarding standardising tab buttons, I learnt about CSS selectors used for styling, from selecting by tag to by descendents. This "),_c('a',{attrs:{"href":"http://web.simmons.edu/~grabiner/comm244/weekfour/selectors.html"}},[_v("guide")]),_v(" was useful for my learning")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"typescript-and-migration"}},[_v("Typescript and migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript-and-migration","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Different ways to import and export files and functions in Typescript, which differed significantly from Javascript. The "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html#import-export-syntax-reference"}},[_v("Markbind documentation")]),_v(" on that was very useful in my understanding.")]),_v(" "),_c('li',[_v("Defining and importing types. I learnt that npm packages often defined interfaces for their packages, making it easier to convert.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("I had to do a squash commit for the typescript migration. I learnt about the differences between rebasing vs merging through this "),_c('a',{attrs:{"href":"https://www.atlassian.com/git/tutorials/merging-vs-rebasing"}},[_v("article")]),_v(" and about the pros and cons and dos and don'ts for rebasing. I was encountering the problem where squashing the merge resulted in the PR containing the recent commits from the master branch. This taught me not to miz up merging and rebasing and just do one or the other.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"github-actions"}},[_v("Github actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("I learnt how to configure Github actions as I had to upgrade node version from 14 to 16 in Markbind/markbind-action and to also remove some depreated syntaxes. I learnt about the workflow of github actions and it's purpose.\nI also had to learn how to test GitHub actions. I followed the tutorial in "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/githubActions/markbindAction.html"}},[_v("Markbind Dev Guide")]),_v(" on testing and also attempted to use VSCode Extension for Github Actions to test more effectively following this "),_c('a',{attrs:{"href":"https://github.blog/2023-03-28-announcing-the-github-actions-extension-for-vs-code/"}},[_v("tutorial")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"nunjucks"}},[_v("Nunjucks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#nunjucks","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("I learnt about Nunjucks when making documentation updates. Specifically, regarding Nunjucks Macros: how to declare them, write if statements and how to use them. The "),_c('a',{attrs:{"href":"https://mozilla.github.io/nunjucks/getting-started.html"}},[_v("documentation on Nunjucks")]),_v(" are particularly useful.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"node-js-versioning"}},[_v("Node.js versioning"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#node-js-versioning","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deployment"}},[_v("Deployment"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deployment","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For the node.js version upgrade, I had to check that the deployment was ok with the higher version. I therefore had to learn how to deploy the sites with github pages,CircleCi and Appveyor and Surge. I didn't do it with Travis due to a persistent account error. I followed the tutorial in the "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/deployingTheSite.html"}},[_v("Markbind tutorial")]),_v(" to learn the deploying for each CI platform.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"reuse-principle"}},[_v("Reuse principle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reuse-principle","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"documentation"}},[_v("Documentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Fri, 1 Mar 2024, 8:00:34 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  