import React, { Component } from "react";

class Counter extends Component {
  handleDelete= () =>{

  }
  render() {
    return (
    <div className=" items-center">
      <div className=" fixed mt-2 ml-[50px]">
        <span  className={this.getSpanClasses()}> {this.formatCount()} </span>
      </div>
          <div className="ml-[150px] my-6 flex items-center" >
        <button
          onClick={() => this.props.onIncreament(this.props.count)}
          className=" bg-gray-600 p-2 rounded ml-4 cursor-pointer"> + </button>
        <button 
        onClick={() => this.props.onDecreament(this.props.count)}
         disabled={this.props.count.value === 0 ? 'disabled' : '' }
          className=" bg-gray-400 p-2 rounded ml-4 cursor-pointer"> - </button>
        <button onClick={() => this.props.onDelete(this.props.count.id)} className=" bg-red-700 ml-2 p-2 rounded cursor-pointer"> X </button>
        <button onClick = {()=> this.props.onGetRid(this.props.count.id)} className=" bg-red-700 ml-2 p-2 rounded cursor-pointer"> delete </button>
      </div>
      </div>
    );
  }
   


  getSpanClasses() {
    let classes = " p-2 rounded  ";
    classes += this.props.count.value === 0 ? "bg-yellow-400" : "bg-blue-600";
    return classes;
  }

  formatCount() {
    let { value } = this.props.count;
    return value === 0 ? 'zero' : value;
  }
}

export default Counter;
