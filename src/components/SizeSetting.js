import React from 'react';


class SizeSetting extends React.Component {
    onChangeSize = (param) => {
        this.props.onChangeSize(param)
    }
    onReset =() =>{
        this.props.onReset();
    }
    render() {
        let { size } = this.props;
        return (
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {size}px</h3>
                    </div>
                    <div className="panel-body">
                        <button 
                                onClick={() => this.onChangeSize(2)} 
                                type="button" 
                                className="btn btn-danger">
                                Increase +
                        </button>

                        <button 
                                onClick={() => this.onChangeSize(-2)} 
                                style={{ marginLeft: "30px" }} 
                                type="button" 
                                className="btn btn-default">
                                Decrease -
                        </button>
                    </div>
                </div>
                <button 
                        onClick= {this.onReset}
                        type="button"
                        className="btn btn-success">
                        Reset
                </button>
            </div>
        );
    }

}

export default SizeSetting;
