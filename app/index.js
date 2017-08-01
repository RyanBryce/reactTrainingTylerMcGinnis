var React = require('react');
var ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
require('./index.css');

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function (th){
            return th.friend === true
          }).map( function (hmm) {
            return <li key={hmm.name}> {hmm.name} </li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function (th){
            return th.friend !== true
          }).map( function (hmm) {
            return <li key={hmm.name}> {hmm.name} </li>
          })}
        </ul>
      </div>
    )
  }
}
Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}
ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
