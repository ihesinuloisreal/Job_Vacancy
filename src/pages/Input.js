import React, { Component } from 'react'
import axios from 'axios'

class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        // view: [],
        uname: ''
        //  error: "Error"
      }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:3006/user')
    //     .then(response => {
    //         this.setState({view: response.data})
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    onchangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    submite = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3006/user', this.state)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }


  render() {
      const {uname} = this.state;
    return (
      <div>
        <div>
            <form onSubmit={this.submite}>
                <input type='text' 
                name='uname' value={uname} 
                onChange={this.onchangeHandler}/>
                <button className='btn btn-primary'>submit</button>
            </form>
        </div>
          {/* {
          view.length ? 
            view.map(view => <div key={view.id}>{view.name}</div>) : null
      } */}
      </div>
      
    )
  }
}

export default Input