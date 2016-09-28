# Full Stack Redux Tutorial ([Link](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-architecture))

> [Original Source](https://github.com/teropa/redux-voting-client) 

> Note this is the client-side repo. **Click [here](https://github.com/gDelgado14/voting_app_server) for the server-side repo**.

> Following Google HTML & CSS Style Guide ([Link](https://google.github.io/styleguide/htmlcssguide.xml?showone=Optional_Tags#Optional_Tags)) .. More info [here](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission)

I have not installed webpack-dev-server globally so we might run into a few issues. 

To run webpack-dev-server run `npm run serve` and the server will be listening on port 8080.

### Notes: 

We've been using a BDD / TDD approach to development on the server, but with hot module replacement / reloading and stateless functional React components, our feedback loop is quite good. 

We'll implment tests only after we've cretead our components.

### Homework

1 - Add CSS (use author's [own CSS](https://github.com/teropa/redux-voting-client/commit/css) as a guideline) 

2 - refactor components to use ES6 classes