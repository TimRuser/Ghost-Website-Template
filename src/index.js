const root = ReactDOM.createRoot(document.getElementById('react-install-root'))

let windows = <p>This is the windows text.</p>;
let mac = <p>This is the mac text</p>;
let linux = <p>This is the linux text</p>;
let text;

switch (props.os) {
    case 'Windows':
        text = windows;
        break;
    case 'Linux':
        text = linux;
        break;
    case 'MacOS':
        text = mac;
    default:
        break;
}

function Install(props) {
    return <div className="installation-popup-root">
        <div className="installation-popup" >
            <i className="fa-solid fa-xmark fa-2x installation-popup-x" onClick={closeInstall}></i>
            <div className="installation-popup-content">
                <h1>Install software on {props.os}</h1>
                {text}
            </div>
        </div>
        <div className="installation-popup-background" onClick={closeInstall}></div>
    </div>
}

function openInstall(os) {
    // Creating Install Component
    let element = (
        <Install os={os} />
    )
    console.log("It worked!")

    // Rendering Component
    const rootElement = document.getElementById('react-install-root')
    rootElement.style.visibility = 'visible';
        
    root.render(element)
}

function closeInstall() {
    let element = <div></div>;
    
    const rootElement = document.getElementById('react-install-root')
    rootElement.style.visibility = 'hidden';

    root.render(element);
}