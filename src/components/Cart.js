import React, {Component} from 'react';
import Item from './cartItem';
import {connect} from 'react-redux';
import {Navbar} from 'react-materialize';
class Cart extends Component {
  render() {
    return (
      <div>
        <Navbar>Cart</Navbar>
        {this.props.products.map(val => (
          <Item pro={val} quantity={val.quantity} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, Props) => {
  return {
    products: state.Add,
  };
};

export default connect(mapStateToProps)(Cart);
