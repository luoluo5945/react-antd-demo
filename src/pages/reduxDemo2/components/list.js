import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component {
  render() {
    const { demoList = [] } = this.props
    return (
      <ul>
        {demoList.map((item, index) => (
          <p key={index}>
            {item.text}
          </p>
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  demoList: PropTypes.array.isRequired,
}

export default List