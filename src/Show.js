import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
var React = require('react');

//component for calousal
class Show extends React.Component {
  //for intialising
  constructor(props) {
    super(props);
    this.state = {
      corosel: [],
    };
  }
//didmount cycle 
  componentDidMount() {
    axios.get("http://www.asianlive.in/api/v1/get_top_carousel/?pagetype=technology")
      .then((res) => {
          this.setState({corosel:res.data.response});
        })
  }
  render() {
      const {corosel:corosels} = this.state;
      return(
          <Carousel style={{width:20}}>
             {
               corosels.map((corosel, index) => (
                     <div key={index} >
                        <img src={corosel} alt="slider"/>
                     </div>)
              )
            }
         </Carousel>
    );
  }
}

export default Show;
