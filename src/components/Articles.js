import React, { Fragment } from 'react';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const { page } = this.state;
    try {
      const res = await fetch(
        `https://jsonmock.hackerrank.com/api/articles?page=${page}`,
      );
      const data = await res.json();
      const articles = new Array(data);
      console.log(articles);
      this.setState({
        articles
      });
    }
    catch (err) {
      console.error(err);
    }
    finally {
      // this.setState({
      //   ...this.state,
      //   loading: false,
      //   error: false,
      // });
    }
  }

  render() {
    const { page, articles, loading, error } = this.state;
    console.log(articles);
    return (
      <Fragment>
        <div className="pagination">
          <button data-testid="page-button" key="page-button-1">
            {page}
          </button>
          <button data-testid="page-button" key="page-button-2">
            2
					</button>
        </div>
        <ul className="results">

        </ul>
      </Fragment>
    );
  }
}

export default Articles;
