import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
let styles = {
    inputText: {
        position: 'relative',
        display: 'block',
        height: '2rem',
        borderRadius: '0px',
        backgroundColor: '#f8f9fb',
        border: 'none'
        
    },
    email:{
        fontSize:'13px',
        fontWeight:'700',
        display:'block',
        paddingTop: '.5rem',
        paddingLeft: '1rem',
        textTransform: 'uppercase',
        textAlign:'left',
        color: '#7c7c7c',
        backgroundColor: "rgb(248, 249, 251)",
        border: 'none'
    }
}
export class Counter extends Component {
  static displayName = Counter.name;

    
  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
            <h4>Luxury High Quality House For Sale</h4>
            <h6>Bahria Town, Islamabad, Islamabad Capital</h6>
        <Row>
                <Col>
                    <img src="https://media.zameen.com/thumbnails/68779056-800x600.webp" />
                </Col>
                <Col>
                    <p>Contact Agent for more information.</p>
                    <div>
                        <span style={styles.email}>Name*</span>
                        <input style={styles.inputText} type="text" placeholder="Enter Name..." /><br /><br />
                    </div>
                    <input type="email" value="Enter Email..." />
                </Col>
        </Row>
        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
