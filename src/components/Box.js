import React from 'react';

export default class Box extends React.Component {
  render() {
    const value = {
      a: 1,
      b: 2
    }
    return (
      <div className="box">
        {this.props.children(value)}
      </div>
    )
  }
}

<Box>
  {value => <div>
    <div>{value.a}</div>
    <div>{value.b}</div>
  </div>}
</Box>