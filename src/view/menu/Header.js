import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MenuIcon from '../icons/MenuIcon';
import { openMenu } from '../../actions/Actions';
import connect from 'react-redux/es/connect/connect';

let isOpen = false;
class Header extends Component {
  render() {
    const style = {
      'color': '#fff',
      'backgroundColor': '#5098d5',
      'boxShadow': '0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1)'
    };

    const title = this.props.title;
    isOpen = this.props.isOpen;
    return (
      <div style={style}>
        <Container>
          <div className='row'>
            <MenuIcon style={{zIndex:'10001'}} onClick={this.props.toggleMenu} open={this.props.isOpen} />
            <div className='col'><h3>{title}</h3></div>
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.value
});
const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => {
    isOpen = !isOpen;
    dispatch(openMenu(isOpen));
  }
});

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
