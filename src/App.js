import React, { Component } from 'react';
 import './App.css';
 import Counters from './components/Counters';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    counts: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  resetValue = () => {
    const counts= this.state.counts.map( c => {
      c.value = 0;
      return c;
    });
    this.setState({ counts });
  };
  

  handleIncreament = count => {
const counts = [...this.state.counts];
const index = counts.indexOf(count)
counts[index] = {...count}
counts[index].value++
this.setState({counts})
  };

  handleDelete = (countId) => {
    const counts = this.state.counts.filter((c) => c.id !== countId);
    this.setState({ counts });
  };

  handleDecreament = count => {
    const counts =[...this.state.counts];
    const index = counts.indexOf(count)
    counts[index] = {...count}
    counts[index].value--;
    this.setState({counts})
  }

  removeCount=() =>{
    console.log("count removed...");
  }

  render() { 
    return (
    <>
   <Navbar totalCounts={this.state.counts.filter(count => count.value > 0 ).length} />
   <main  className='container'>
       <Counters 
       onReset={this.resetValue}
       onIncreament={this.handleIncreament}
       onDecreament={this.handleDecreament}
       onDelete={this.handleDelete}
       counts={this.state.counts}
       onGetRid={this.removeCount}
       />
   </main>
   </>
    );
  }
}
 
export default App;