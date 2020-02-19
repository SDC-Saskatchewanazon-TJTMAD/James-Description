import React from "react";
import Title from "./components/Title.jsx";
import Description from "./components/Descriptions.jsx";
import Price from "./components/Price.jsx";
import axios from "axios";
import Rating2 from "./components/StarRating2.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 3,
      title: [],
      description: [],
      price: [],
      ratings: 0
    };
    this.getDescriptionInfo = this.getDescriptionInfo.bind(this);
  }

  componentDidMount() {
    // axios function
    this.getDescriptionInfo();

    // Event Listener that updates the product ID for my component
    window.addEventListener("click", event => {
      if (
        event.target.getAttribute("data-id") &&
        event.target.getAttribute("data-id") !== this.state.productId &&
        !isNaN(event.target.getAttribute("data-id"))
      ) {
        this.setState(
          { productId: [event.target.getAttribute("data-id")] },
          () => {
            this.getDescriptionInfo();
          }
        );
      }
    });
  }

  // GET request for product info from the db
  getDescriptionInfo() {
    axios
      .get("/description", {
        params: {
          ID: this.state.productId
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          title: response.data.product_name,
          description: response.data.product_description,
          price: response.data.price,
          ratings: response.data.rating
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // renders four components, Title, Price, Rating2 and Description
  render() {
    return (
      <div>
        <div>
          <Title title={this.state.title} />
          <Rating2
            ratings={this.state.ratings}
            productId={this.state.productId}
          />
        </div>
        <div></div>
        <hr></hr>
        <div>
          <br></br>
          <Price price={this.state.price} />
          <a className="hover" href="#Company">
            Thank you for being a Prime member. Get $70 off instantly: pay $0.00
            upon approval for the Saskatchewanazon Prime Rewards Visa Card. No
            annual fee.
          </a>
        </div>
        <br></br>
        <div>
          <Description description={this.state.description} />
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default App;
