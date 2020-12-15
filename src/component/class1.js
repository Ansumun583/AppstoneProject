import React, { Component } from 'react'

export default class Class1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'Ansumun'

    }
  }
render(){
  return(
    <div>
      <span>hello {this.state.name}</span>
    </div>
  )
}
}