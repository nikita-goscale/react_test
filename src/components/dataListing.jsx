import React, { Component } from 'react';

class DataListing extends Component {
    state = {
        list: []
    }
    async componentDidMount() {
        try {
          setInterval(async () => {
            const res = await fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0');
            const blocks = await res.json();
            const self = this;
            blocks.hits.map(hit => {
                let list = this.state.list;
                const id = this.state.list.length + 1;
                list = [...list, {
                    id: id,
                    title: hit.title,
                    url: hit.url,
                    created_at: hit.created_at,
                    author: hit.author
                }]
                self.setState({ list})
            })
          }, 10000);
        } catch(e) {
          console.log(e);
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default DataListing;