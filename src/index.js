import "react-responsive-carousel/lib/styles/carousel.min.css";
import Show from "./Show";
import Image from "./Image";
var React = require('react');
var ReactDOM = require('react-dom');
/*var createClass = require('create-react-class');*/

class App extends React.Component {
  render() {
    return(
      <div className="text-center">
      <Show />
      <Image />
      </div>
    );
  }
}


//rendering dom on same component's page this can be done on a different page and can simply export this one
ReactDOM.render(
  <App />,
  document.getElementById('root'));

export default App;
