import React, { Component } from 'react'
//import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component {
    constructor(){
      super()
      this.state= {
        robots:[],
        searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})        
        
        //console.log(filteredRobots)
        //this.setState({robots:filteredRobots})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>  this.setState({robots:users}))

        
    }
    render () {

    const {robots, searchfield} = this.state   // destructuring in javaScript
     const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //if (!robots.length){   //== (robots.length === 0) ; il n'ya pas de longueur
        return (!robots.length)? <h1 className='tc'> loading</h1> :
             (
            <div className='tc'>
                <h1 className='f1'>RoboFriends </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                   <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }
}

export default App