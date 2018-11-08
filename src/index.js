import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
var React = require('react');
var ReactDOM = require('react-dom');
/*var createClass = require('create-react-class');*/


const iStyle = {
  height:200,
  width:270,
}
//component for carousel
class Caarousel extends React.Component {
  render () {
    return(
      <Carousel style={{width:20}}>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-1.png" alt="slider"/>
             </div>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-2.png" alt="slider"/>
             </div>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-3.png" alt="slider" />
             </div>
         </Carousel>
    );
  }
}

//component for color
class Images extends React.Component {
  render() {
    return(

          <div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-between", paddingLeft:150, paddingRight:150}}>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={iStyle} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={iStyle} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={iStyle} />
              <p>Product 3</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={iStyle} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={iStyle} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={iStyle} />
              <p>Product 3</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={iStyle} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={iStyle} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={iStyle} />
              <p>Product 3</p>
            </div>
          </div>
    );
  }
}

class Show extends React.Component {
  render() {
    return(
      <div className="text-center">
      <Caarousel />
      <Images />
      </div>
    );
  }
}
//rendering dom on same component's page this can be done on a different page and can simply export this one
ReactDOM.render(
  <Show />,
  document.getElementById('root'));
