import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider, connect } from 'react-redux'



class TableHeader extends React.Component {
	render() {
		return (
		  <tr>
			<th> 1</th>
			<th> 2</th>
		  </tr>
		);
	}	
}

class TableRow extends React.Component {
	render() {
		return (
		  <tr>
			<td>{this.props.audioNum}</td>
			<td>{this.props.audioName}</td>
		  </tr>
		);
	}	
}

//root component
//see interactivity and dynamic uis page to add change events
class Table extends React.Component{
	constuctor(){
		this.state = {
			audioNum: 0,
			audioName: "no data"
		};
	}
	loadDetailsFromServer(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (details) => {this.setState({details: details});},
			error: (xhr, status, err) => {console.error(this.props.url, status, err.toString());}
		});
	}
	getInitialState(){
		return (
			audioName: '',
			audioName: ''
			);
	}
	componentDidMount(){
		this.loadDetailsFromServer();
		setInterval(this.loadDetailsFromServer, this.props.pollInterval);
	}
	componentWillUnmount(){
		this.serverRequest.abort();
	}
	render() {
		let rows = Object.keys(details).map((k, i) => {<TableRow audioNum={k.audioNum} audioName={k.audioName} />});
		return(
		<table>
			<thead>
				<TableHeader />
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
		);
	}
};

//declare property types
Table.propTypes = {
	audioNum: React.PropTypes.number.isRequired,
	audioName: React.PropTypes.string
}

Table.defaultProps = {
	audioNum: 0,
	audioName: "no data"
}

//export default Table;
module.exports = Table;


//this.props.details
//		let rows = this.props.url.map((k) => {<TableRow audioNum={k.audioNum} audioName={k.audioName} />});
//		this.serverRequest = $.get(this.props.details, (result) =>{
//			this.setState({
//				audioNum: rows.audioNum,
//				audioName: rows.audioName
//			});
//		});