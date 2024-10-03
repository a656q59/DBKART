import React, { useState } from 'react'
import salwar from'../wall.jpg';


const CheckoutPage = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handlePlaceOrder = () => {
    // Logic for placing the order can go here
    // For now, we'll just simulate a successful order placement
    setOrderPlaced(true);
};
  return (
    
    <div className="container checkout-container">
          <h2 className="text-center">Checkout</h2>

          <div className="row">
              {/* Product Summary */}
              <div className="col-md-8">
                  <div>
                      Delivers to: <strong>ASHIMA BANSAL....695581</strong>
                  </div>
                  <div className='text-black'>123, Technopark, Trivandrum</div>

                  {/* Product Item */}
                  <div className="product-item mb-3">
                      <div className="row">
                          <div className="col-md-4">
                              <img 
                                  src={salwar} 
                                  style={{ height: '240px', width: '200px' }} 
                                  alt="Salwar Kurta Karachi Pattern" 
                                  className="img-fluid" 
                              />
                          </div>
                          <div className="col-md-8">
                              <h5>Salwar Kurta Karachi Pattern</h5>
                              <div className='text-secondary mb-3'>Sold by: Lonkar Fashions Private Limited</div>
                              <p>Size: M</p>
                              <p>Price: ₹2999</p>
                              <button className="btn btn-danger mb-3">Remove</button>
                              <div><strong>14 days</strong> return available</div>
                              <div>Express delivery in <strong>2 days</strong></div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Shipping and Payment */}
              <div className="col-md-4 mt-5"> 
                  <div className="summary">
                      <div className='text-black mb-2'>PRICE DETAILS (1 Item)</div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span>Total MRP</span><span>₹2999</span>
                      </div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span>Discount on MRP</span><span>₹111</span>
                      </div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span>Coupon Discount (DBKARTNEW)</span><span>₹100</span>
                      </div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span>Platform Fee</span><span>₹10</span>
                      </div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span>Shipping Fee</span><span>Free</span>
                      </div>
                      <div className='d-flex justify-content-between mb-2'>
                          <span><strong>Total Amount</strong></span><span><strong>₹2798</strong></span>
                      </div>
                      <form>
                          <button 
                              type="button" 
                              className="btn btn-danger btn-lg btn-block mt-3" 
                              onClick={handlePlaceOrder}
                          >
                              Place Order
                          </button>
                      </form>
                  </div>
              </div>
          </div>

          {/* Success Message */}
          {orderPlaced && (
              <div className="alert alert-success mt-4" role="alert">
                  Congratulations!!!!!! Your order has been placed successfully!
                  Your Order tracking ID is DB6564635464
                  and it will be delivered by DB Logistics by tomorrow.
              </div>
          )}
      </div>



  )
}
export default CheckoutPage;




