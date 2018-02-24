import React from "react";
import { connect } from "react-redux";
import { getTotalBasketPrice, getBasketPhonesWithCount } from "../../selectors";
import R from "ramda";
import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
} from "../../actions";
import { Link } from "react-router";

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
}) => {
  const isBasketEmpty = R.isEmpty(phones);

  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && <div>Your shopping cart is empty</div>}

        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {phones.map((phone, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>{phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                    <span
                      onClick={() => removePhoneFromBasket(phone.id)}
                      className="delete-cart glyphicon glyphicon-remove"
                      style={{ color: "red" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {R.not(isBasketEmpty) && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total: </b>
              ${totalPrice}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div>
        <Link className="btn btn-info" to={`${process.env.PUBLIC_URL}/`}>
          <span className="glyphicon glyphicon-info-sign" />
          <span> Continue shopping</span>
        </Link>
        {R.not(isBasketEmpty) && (
          <div>
            <button onClick={cleanBasket} className="btn btn-danger">
              <span className="glyphicon glyphicon-trash" />
              <span> Clear cart</span>
            </button>
            <button
              className="btn btn-success"
              onClick={() => basketCheckout(phones)}
            >
              <span className="glyphicon glyphicon-envelope" />
              <span> Checkout</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
