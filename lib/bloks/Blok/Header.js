'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../../../index');

require('../../blok.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var color = props.color,
      link = props.link,
      raised = props.raised,
      title = props.title,
      transparent = props.transparent;

  var blokHeaderClass = (0, _classnames2.default)({
    'blok-header': true,
    'transparent': transparent
  });
  var blokHeaderLinkClass = (0, _classnames2.default)({
    'blok-header-link': true
  });
  var linkData = link.map(function (data, key) {
    return _react2.default.createElement(_index.Link, {
      key: key,
      text: data.text,
      linkRef: data.linkRef,
      active: data.active
    });
  });
  return _react2.default.createElement(
    _index.Grid,
    { color: color, raised: raised, className: blokHeaderClass },
    _react2.default.createElement(
      _index.Grid.Row,
      null,
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 2, textAlign: 'middle' },
        _react2.default.createElement(_index.Text, { font: 'heading', size: 'h3', text: props.title })
      ),
      _react2.default.createElement(
        _index.Grid.Column,
        { width: 6, textAlign: 'right', className: blokHeaderLinkClass },
        linkData
      )
    )
  );
};

Header.propTypes = {
  color: _propTypes2.default.string,
  link: _propTypes2.default.array,
  raised: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  transparent: _propTypes2.default.bool
};

Header.defaultProps = {
  color: 'white',
  title: 'Title'
};

exports.default = Header;