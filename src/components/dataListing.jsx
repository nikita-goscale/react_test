import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class DataListing extends Component {
    // state = {
    //     list_href: false
    // }

    // componentDidMount(){
    //     this.setState({list_href: window.location.href.includes('/list')})
    // }
    // handleList = (itemId) => {
    //     window.location.href = `/list/${itemId}`;
    // }
    state = {
        list: [],
        currentPage: 1,
        itemPerPage: 20
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

    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    render() {
        const { list, currentPage, itemPerPage } = this.state;

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * itemPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
        const currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((item, index) => {
            return (
                <tr key={item.id} onClick={() => this.handleList(item.id)}>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.author}</td>
                    <td>{item.created_at}</td>
                </tr>
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / itemPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
            key={number}
            id={number}
            onClick={this.handleClick}
            style={{cursor: 'pointer'}}
            >
            {number}
            </li>
        );
        });
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">URL</th>
                        <th scope="col">author</th>
                        <th scope="col">created_at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTodos}
                    </tbody>
                </table>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}
 
export default DataListing;