import { render } from 'enzyme';
import React, { Component } from 'react';
import './App.scss';

import Articles from './components/Articles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      data: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    const { page } = this.state;
    const fetchData = async (pageNum) => {
      try {
        const res = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`);
        const data = await res.json();
        this.setState({
          page: pageNum,
          data,
        });
      }
      catch (err) {
        if (err) this.setState({
          ...page,
          data: null,
          error: true
        });
      }
      finally {
        this.setState({
          ...this.state,
          loading: false
        });
      }
      if (page !== 1) return () => fetchData(page);
    };
  }


  render() {
    return (
      <div>
        <Articles />
      </div>
    );
  }
}

export default App;
