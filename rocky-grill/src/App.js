import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div id="side-bar">
          <div id="logo-div">
            <img id="rg-logo" src={require('./Images/rocky-grill-logo.jpg')} />
            <div id="rocky-div">
            </div>
          </div>
          <br />
          <div id="address">1501 Main Street Brockway PA</div>
          <br />
          <div className="menu-option">About Us</div>
          <div className="menu-option">Menu</div>
          <div className="menu-option">Hours</div>
          <br />
          <div id="phone-number">(814)268-4595</div>
        </div>
        <div id="main-body">
          <div id="main-body-container">
            <div className="row">
              <div className="col-4"><img class="food-images" src={require('./Images/image-one.jpg')} /></div>
              <div className="col-4"><img class="food-images" src={require('./Images/image-two.jpg')} /></div>
              <div className="col-4"><img class="food-images" src={require('./Images/image-three.jpg')} /></div>
            </div>
          </div>
        </div>
        <div id="about-us-container">
          <div id="about-us-title">About Us</div>
          <div id="about-us-description">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ex semper, varius quam non, feugiat elit. Curabitur varius libero ex, non condimentum elit imperdiet at. Pellentesque porttitor consectetur rhoncus. Nam et placerat dolor. Praesent vehicula accumsan justo ac porta. Fusce fermentum massa vehicula arcu dapibus, ac laoreet erat volutpat. Pellentesque feugiat vitae nisl ut mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu dui ac odio semper varius. Etiam hendrerit quis sem et mollis.

Donec volutpat enim at massa lobortis mattis. Mauris malesuada orci quis iaculis finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nullam at laoreet sem. Vivamus massa odio, sodales vel tempor quis, molestie nec mi. Maecenas feugiat ullamcorper urna, vel hendrerit erat lacinia eu. In hac habitasse platea dictumst. Nunc eu leo ut lorem tincidunt feugiat quis eu ipsum. Integer feugiat leo maximus, iaculis velit volutpat, tincidunt erat. Suspendisse ac velit consectetur, fringilla mi ut, auctor turpis. Quisque id quam id magna efficitur scelerisque vitae ac ante. Vivamus sapien dui, blandit at varius et, iaculis eget dui. Proin tincidunt lectus vitae sapien facilisis, in consequat enim efficitur. Nulla eu euismod purus, in suscipit felis.</div>
        </div>
        <div id="hours-container">
              <div className="row">
                <div className="col-6 hours"><div id="hours-title">Hours</div><div id="hours-disclaimer">*Hours subject to change. Please call ahead and schedule a reservation.</div></div>
                <div className="col-6 hours"><div id="hours-hours">Tuesday 9-6<br />Wednesday 9-6<br />Thursday 9-6<br />Friday 9-6<br />Saturday 9-6</div></div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
