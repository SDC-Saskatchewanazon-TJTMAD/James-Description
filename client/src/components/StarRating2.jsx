import React from "react";

function Rating2({ ratings, productId }) {
  //console.log("This is from Rating2: ", ratings[0])
  //ratings = 3
  const rating = [];
  let image = "";
  for (let i = 1; i < 6; i++) {
    if (i <= ratings) {
      image =
        "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/full_leaf.png";
    } else if (i - ratings <= 0.25) {
      image =
        "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/full_leaf.png";
    } else if (i - ratings > 0.25 && i - ratings < 0.75) {
      image =
        "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/half_leaf.png";
    } else {
      image =
        "http://descriptions-env.62m3r6bcww.us-east-2.elasticbeanstalk.com/images/empty_leaf.png";
    }

    rating.push(
      <img
        key={i}
        src={image}
        alt="Leaf"
        id={productId}
        height="27px"
        width="27px"
      />
    );
  }

  return <div>{rating}</div>;
}

export default Rating2;
