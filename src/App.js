import React from 'react';
import './App.css';
import ColorPicker from "./components/ColorPicker"
import SizeSetting from "./components/SizeSetting"
import Result from "./components/Result"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            size: 12
        }
    }

    onChangeColor = (color) => {
        this.setState({
            color: color
        })
    }

    onChangeSize = (param) => {
        let { size } = this.state;
        if (!param) return;
        if (size + param >= 8 && size + param <= 36) {
            size += param
            this.setState({
                size: size
            })
        }
    }

    onReset = () => {
        this.setState({
            color: "red",
            size: 12
        })
    }

    render() {
        let { color, size } = this.state;
        return (

            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker color={color} onChangeColor={this.onChangeColor} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting onReset={this.onReset} size={size} onChangeSize={this.onChangeSize} />
                    </div>
                  <Result color={color} size={size} />
                </div>

            </div>

        );
    }

}

export default App;
