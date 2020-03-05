import React from 'react';


class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'gray'],
            size: 12,
        }
    }
    changeColor = (color) => {
        this.props.onChangeColor(color);

    }

    render() {
        let { colors } = this.state;
        let colorCurent = this.props.color;

        let ctrlColor = colors.map((color, index) => {
            return <span 
                        onClick={() => this.changeColor(color)} style={{ backgroundColor: color }} 
                        className={color === colorCurent ? "boxColor active" : "boxColor"}
                        key={index}>
                    </span>
        })

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body"  >
                    {ctrlColor}
                    <div style={{ clear: "both" }}></div>
                    <hr />
                </div>
            </div>

        );
    }

}

export default ColorPicker;
