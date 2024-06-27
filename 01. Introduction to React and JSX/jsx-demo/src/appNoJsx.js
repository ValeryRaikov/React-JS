const htmlRoot = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(htmlRoot);

const headerReactElement = React.createElement('h1', null, 'Hello there from React');
const paragraphReactElement = React.createElement('p', null, 'This is awesome!');
const headingSectionReactElement = React.createElement(
    'header', null, headerReactElement, paragraphReactElement
);

reactRoot.render(headingSectionReactElement);