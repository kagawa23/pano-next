import React, { PureComponent } from 'react';
import Viewer from '../components/viewer';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (<Viewer />);
  }
}

export default Index;
