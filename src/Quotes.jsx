import axios from 'axios'
import React, { Component } from 'react'

class Quotes extends Component {
    constructor() {
        super()
        this.state = ({
            quote: '',
            auther: ''
        })
    }
    componentDidMount() {
        this.fetchquote()
    }

    fetchquote = () => {
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
            .then((response) => {
                const { quoteText } = response.data.data[0]
                const { quoteAuthor } = response.data.data[0]
                this.setState({
                    quote: quoteText,
                    auther: quoteAuthor
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <div> <h2>Quotes Generator</h2></div>
                    <div className='header'><h4>{this.state.quote}</h4></div>
                    <div><h6>{this.state.auther}</h6></div>

                </div>
                <div>
                    <button className='button' onClick={this.fetchquote}> GIVE ME QUOTE</button>
                </div>
            </div>
        )
    }
}
export default Quotes