const htmlRoot = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(htmlRoot);

// const headerReactElement = React.createElement('h1', null, 'Hello there from React');
// const headerReactElement = <h1>Hello there from React</h1>

// const paragraphReactElement = React.createElement('p', null, 'This is awesome!');
// const paragraphReactElement = <p>This is awesome!</p>

const headingSectionReactElement = (
    <header>
        <h1>Hello there from React</h1>
        <p>This is awesome!</p>

        <p>Testing the reload...</p>
    </header>
);

function Main(title) {
    return (
        <main>
            <h2>{title}</h2>
            <ul>
                <li>First line of code</li>
                <li>Second line of code</li>
                <li>Third line of code</li>
            </ul>
        </main>
    ); 
}

const siteContent = (
    <div>
        {headingSectionReactElement}
        <Main title='Test purpose' />
    </div>
);

reactRoot.render(headingSectionReactElement);