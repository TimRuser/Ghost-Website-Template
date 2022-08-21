const root = ReactDOM.createRoot(document.getElementById('react-install-root'));

function Install(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "installation-popup-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "installation-popup"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark fa-2x installation-popup-x",
    onClick: closeInstall
  }), /*#__PURE__*/React.createElement("div", {
    className: "installation-popup-content"
  }, /*#__PURE__*/React.createElement("h1", null, props.os), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis fuga, necessitatibus ", /*#__PURE__*/React.createElement("br", null), " mollitia pariatur ipsam iusto ad voluptatum libero? Pariatur nobis, iure perspiciatis vero ullam reiciendis fugit? Maxime ", /*#__PURE__*/React.createElement("br", null), " aspernatur laudantium sapiente?"))), /*#__PURE__*/React.createElement("div", {
    className: "installation-popup-background",
    onClick: closeInstall
  }));
}

function openInstall(os) {
  // Creating Install Component
  let element = /*#__PURE__*/React.createElement(Install, {
    os: os
  });
  console.log("It worked!"); // Rendering Component

  const rootElement = document.getElementById('react-install-root');
  rootElement.style.visibility = 'visible';
  root.render(element);
}

function closeInstall() {
  let element = /*#__PURE__*/React.createElement("div", null);
  const rootElement = document.getElementById('react-install-root');
  rootElement.style.visibility = 'hidden';
  root.render(element);
}