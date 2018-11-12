import axios from "axios";
var React = require('react');

const iStyle = {
  height:200,
  width:270,
}

//component for images
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    axios.get("http://www.asianlive.in/api/v1/get_all_technologies/")
      .then((res) => {
          this.setState({image:res.data.response});
        })
  }

  render() {
    const {image:images} = this.state;
    return(
            <div style={{display:'flex', flexWrap:"wrap", justifyContent:"space-between", paddingLeft:150, paddingRight:150}}>
              {
                images.map((image, index) => (
                <div key={index} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <img src={image.img_url} alt="Product" style={iStyle} />
                <p>{image.technology}</p>
              </div>)
              )
            }
            </div>
    );
  }
}

export default Image;
