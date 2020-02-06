import React from "react";
import Title from './components/Title.jsx';
import Description from './components/Descriptions.jsx';
import Price from './components/Price.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 77,
      title: [],
      description: [],
      price: [],
      ratings: []
    };
    this.getDescriptionInfo = this.getDescriptionInfo.bind(this);
  }

  
  componentDidMount() {
    this.getDescriptionInfo()
  }

  // GET request for product info from the db
  getDescriptionInfo () {
    axios.get(`http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/products/${this.state.productId}`) // is this correct?
    .then((response) => {
      // console.log("this is from the axios request: ", response);
      this.setState({
        title: response.data,
        description: response.data,
        price: response.data,
        ratings: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // renders three components, Title, Price, and Description
  render() {
    return (
      <div>
        <div>
          <Title title={this.state.title} ratings={this.state.ratings}/>
        </div>
        <hr></hr>
        <div>
          <br></br>
          <Price price={this.state.price}/>
          <a className="hover" href="#">Thank you for being a Prime member. Get $70 off instantly: pay $0.00 upon approval for the Amazon Prime Rewards Visa Card. No annual fee.</a>
        </div>
        <br></br>
        <div>
          <Description description={this.state.description}/>
        </div>
      </div>
    )
  }
}

export default App;