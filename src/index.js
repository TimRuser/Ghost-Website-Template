const root = ReactDOM.createRoot(document.getElementById('react-install-root'))

function Install(props) {
    return <div className="installation-popup-root">
        <div className="installation-popup" >
            <i className="fa-solid fa-xmark fa-2x installation-popup-x" onClick={closeInstall}></i>
            <div className="installation-popup-content">
                <h1>{props.os}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga, necessitatibus <br /> mollitia pariatur ipsam iusto ad voluptatum libero? Pariatur nobis, iure perspiciatis vero ullam reiciendis fugit? Maxime <br /> aspernatur laudantium sapiente?</p>
                
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