# Installation Setup for a React-Redux App

## deafult installation

in the terminal do the following

1. create-react-app myApp
2. yarn add react-router-dom redux reduc-thunk react-redux react-redux-loading

## setup folder structure

myApp>:
src > - actions: actions creater & async calls - components - middleware: looger and checking middlewares > - index.js: export applyMiddleware(thunk,1stMiddleware,2ndMiddleware,...); - 1stMiddleware.js: const 1stMiddlewareName = (store) => (next) => (action) => {}
2ndMiddleware.js: ...

        - reducers :controls the modification of the store
          for each portion of the data we need a reducer >
            - index.js: export default combineReducers({
                        1stReducer,
                        2ndReducer
                        loadingBar: loadingBarReducer,
                    });
            - 1stReducer.js
            - 2ndReducer.js
        - utils: utils and helper functions

## setup redux react-router

in index.js: - const store = createStore(reducer, middleware); - ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>,
document.getElementById("root")
);

in App.js: - return (
<>
<LoadingBar>
<div className="container">
<Nav />
{this.props.loading === true ? null : (
<div>
<Route path="/" exact component={home} />
<Route path="/path1" component={comp1} />
<Route path="/path2" component={comp2} />
</div>
)}
</div>
</>
)
connect store to props abd getting authedUser prop
function mapStateToProps({ authedUser }) { // getting it from index.js from store
return {
loading: authedUser === null,
};
}
export default connect(mapStateToProps)(App);

example of connected component
in comp2.js:
class Dashboard extends Component {
render() {
console.log(this.props);
return (
<div>
<h3 className="center">Timeline</h3>
<ul>
{this.props.tweetIds.map((id) => (
<li key={id}>
<Tweet id={id} />
</li>
))}
</ul>
</div>
);
}
}
function mapStateToProps({ tweets }) { //getting tweets from store using connect() method from 'reduc-thunk'
return {
tweetIds: Object.keys(tweets)
.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
};
}
export default connect(mapStateToProps)(Dashboard);
