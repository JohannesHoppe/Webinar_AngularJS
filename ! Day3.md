# Unit Testing AngularJS 

We reviewed the different solutions for doing CRUD on a resource, all results can be found at **[/Day2Task3/](/Day2Task3/)**. Well done, guys!


Unit Testing with karma requires node.js with npm.
To install all npm packages we can use `npm install` and use the default file, called `package.json`

```
{
    "name" : "karma-testrunner-and-depedencies",
    "version" : "1.0.0",
    "description" : "Installs Karma Testrunner and dependencies",
    "dependencies" : {
        "karma": "~0.12.31",
        "karma-jasmine": "~0.3.3",
        "jasmine-core": "~2.1.3",
        "karma-requirejs": "~0.2.2",
        "karma-chrome-launcher": "~0.1.4",
        "karma-cli": "~0.0.4"
    },
    "private": true
}
```

Slides: http://johanneshoppe.github.io/JsBestPractices/#/5

Good examples: [AngularJS test Patterns](https://github.com/daniellmb/angular-test-patterns)



### Task 1:

Add more test coverage! Test that $scope.deleteCustomer(1) forwards the call to customerService.deleteCustomer(1).

##### AC: 
- If its too complicated, you can uncomment $window.confirm
- Optional: You might want to use http://jasmine.github.io/2.0/introduction.html > Spies!



### Task 2:

Behavior Driven Development (BDD) 

In software engineering, behavior-driven development (BDD) is a software development process based on test-driven development (TDD). Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

You got a behavioural specification, please write the test now!

HELP:
https://docs.angularjs.org/api/ngMock/service/$httpBackend

This must be Unit-Test! (NOT an integration test!)
