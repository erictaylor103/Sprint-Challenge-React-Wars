# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    -A javascript library for building user interfaces. Helps with scalability of an app. It is comprised of "components". We can split a webpage into different components -> Example: header, button, slideshow, etc.

1. Describe component state.

    -It is where we store values that belong to a component. The state value can be updated to create a change in how the code will run and how the component re-renders. There is a re-render each time a component state changes.

1. Describe props.

    -A special keyword (props stands for "property") that we use to pass data from one component to the other.


1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    -A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an api and manupilating the DOM manually are side effects.We can sync them by passing in a dependency array as the second argument to the effect hook.