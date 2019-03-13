import React from 'react';
import ReactDOM from 'react-dom';

import Link from './Link';


export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link page="http://www.facebook.com">Facebook</Link>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
