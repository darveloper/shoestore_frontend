import React from 'react';
import './App.css';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/shoes")
        .then(res => res.json())
        .then(shoes => this.setState({shoes}))
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.shoes.map((s) => {
                        return (
                        <p>
                            <li>Brand Name: {s.brand_name}</li>
                            <li>Size: {s.size}</li>
                            <li>Manufacturer: {s.manufacturer}</li>
                            <li>Color: {s.color}</li>
                            <li>Material: {s.material}</li>
                            <li>Shoe Type: {s.shoe_type}</li>
                            <li>Fasten Type: {s.fasten_type}</li>
                            
                        </p>
                        )
                    })}
                </ul>
            </div>
        )
    }

}
export default MyComponent;