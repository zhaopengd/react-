import React from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h1>Test 组件内容</h1>
      </div>
    );
  }
}
Test.propTypes = {

};

export default Test;