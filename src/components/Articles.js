import React from 'react';

class Articles extends React.Component {
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
    try {
      const res = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`);
      const data = await res.json();
      this.setState({
        ...page,
        ...data
      });
    }
    catch (err) {
      if (err) this.setState({
        ...page,
        error: true
      });
    }
    finally {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    console.log(this.state.articles.data);
    return (
      <React.Fragment>
        <div className="pagination">
          <button data-testid="page-button" key="page-button-1">1</button>
          <button data-testid="page-button" key="page-button-2">2</button>
        </div>
        <ul className="results">
          {/* {articles.data.map((item, idx) => (
            <li key={idx}>
              <h4>{item.title}</h4>
            </li>
          ))} */}
        </ul>
      </React.Fragment>
    );
  }
}

export default Articles;
