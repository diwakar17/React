import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
var React = require('react');
var ReactDOM = require('react-dom');
/*var createClass = require('create-react-class');*/

class Images extends React.Component {
  render() {
    return(
      <div>
      <Carousel>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-1.png" alt="slider"/>
                 <p>Legend 1</p>
             </div>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-2.png" alt="slider"/>
                 <p>Legend 2</p>
             </div>
             <div>
                 <img src="https://s3-us-west-2.amazonaws.com/crush-assets/slider-3.png" alt="slider" />
                 <p>Legend 3</p>
             </div>
         </Carousel>
          <div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-around", paddingLeft:200, paddingRight:200}}>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={{height:200, width:270}} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={{height:200, width:270}} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/026-brn" alt="Product" style={{height:200, width:270}} />
              <p>Product 3</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={{height:200, width:270}} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={{height:200, width:270}} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/anytime-brown" alt="Product" style={{height:200, width:270}} />
              <p>Product 3</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={{height:200, width:270}} />
              <p>Product 1</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={{height:200, width:270}} />
              <p>Product 2</p>
            </div>
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
              <img src="https://s3-ap-southeast-1.amazonaws.com/asianapp/mr-132-n-blu" alt="Product" style={{height:200, width:270}} />
              <p>Product 3</p>
            </div>
          </div>
          </div>
    );
  }
}

ReactDOM.render(
  <Images />,
  document.getElementById('root'));
