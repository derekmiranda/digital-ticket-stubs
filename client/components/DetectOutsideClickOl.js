import React, { Component } from 'react'

// tysm: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
export default class DetectOutsideClickOl extends Component {
	constructor(props) {
			super(props);

			this.setWrapperRef = this.setWrapperRef.bind(this);           
			this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
			document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
			document.removeEventListener('mousedown', this.handleClickOutside);
	}

	/**
	 * Set the wrapper ref
	 */
	setWrapperRef(node) {
			this.wrapperRef = node;
	}

	/**
	 * Alert if clicked on outside of element
	 */
	handleClickOutside(event) {
			if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
					alert('You clicked outside of me!');
			}
	}

	render() {
		return (
			<ol {...this.props} ref={this.setWrapperRef}>
					{this.props.children}
			</ol>
		);
	}
}