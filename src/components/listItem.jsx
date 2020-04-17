import React, { Component } from 'react';

class ListItem extends Component {
    state = {
        id: null,
        list: {}
    }
    componentDidMount(){
        const id = window.location.href.split('/').last;
        this.setState({id: id})
    }
    render() {
        return ( <h1>Hello</h1> );
    }
}
 
export default ListItem;