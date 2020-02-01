import React from 'react';

const Price = (props) => {
  return (
    <div id="price" class="a-section a-spacing-small">
      <table class="a-lineitem">
        <tbody>
          <tr id="priceblock_ourprice-row">
            <td id="priceblock_ourprice_lbl" class="a-color-secondary a-size-base a-text-right a-nowrap">Price: </td>
            <td class="a-span12">
              <span id="priceblock_ourprice" class="a-size-medium a-color-price priceBlockBuyingPriceString">
                {props.price.map((price, index) => ( 
                <span key={index}>${price.price} </span> 
                ))} </span>
                <span id="oourprice_shippingmessage">
                  <span>
                    & {<strong>Free Shipping</strong>}. 
                    <a href="#" title="FREE Next Day Pickup" data-toggle="popover" data-placement="bottom" 
                    data-content="Free Next Day Pickup on qualifying orders. See shipping options in checkout."> Details</a> & 
                  </span>
                  <span>
                    <a href="#" title="Return this item for free" data-toggle="popover" data-placement="bottom" 
                    data-content="You can return this item for any reason and get a full refund: no shipping charges. 
                    The item must be returned in new and unused condition"> Free Returns</a>
                  </span>
                </span>
          </td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}



export default Price;

// & {<strong>Free Shipping</strong>}. 
// <a href="#" title="FREE Next Day Pickup" data-toggle="popover" data-placement="bottom" 
// data-content="Free Next Day Pickup on qualifying orders. See shipping options in checkout."> Details</a> & 
// <a href="#" title="Return this item for free" data-toggle="popover" data-placement="bottom" 
// data-content="You can return this item for any reason and get a full refund: no shipping charges. 
// The item must be returned in new and unused condition"> Free Returns</a>

// {props.price.map((price, index) => ( 
//   <div key={index}>
//     Price: $<span style={{color: "red"}}>{price.price}</span> & {<strong>Free Shipping</strong>}. 
//     <a href="#" title="FREE Next Day Pickup" data-toggle="popover" data-placement="bottom" 
//     data-content="Free Next Day Pickup on qualifying orders. See shipping options in checkout."> Details</a> & 
//     <a href="#" title="Return this item for free" data-toggle="popover" data-placement="bottom" 
//     data-content="You can return this item for any reason and get a full refund: no shipping charges. 
//     The item must be returned in new and unused condition"> Free Returns</a>
//   </div>
// ))}