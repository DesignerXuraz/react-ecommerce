import React, { Fragment } from "react";

const CartColumns = () => {
  return (
    <Fragment>
      <div className="container-fluid text-center d-none d-lg-block my-5">
        <div className="row">
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Products</p>
          </div>
          {/* end of single column */}
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Name</p>
          </div>
          {/* end of single column */}
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Price</p>
          </div>
          {/* end of single column */}
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Quantity</p>
          </div>
          {/* end of single column */}
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Remove</p>
          </div>
          {/* end of single column */}
          {/* single column */}
          <div className="col-lg-2">
            <p className="text-uppercase">Total</p>
          </div>
          {/* end of single column */}
        </div>
      </div>
    </Fragment>
  );
};

export default CartColumns;
