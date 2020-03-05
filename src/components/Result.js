import React from 'react';


class Result extends React.Component {
    render() {
        let {color,size} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: {color} - FontSize: {size}px</p>
                <div style={
                    { 
                         fontWeight:"bold",
                         fontSize:`${size}px`,
                         color,
                         border: "3px solid red" ,
                         borderColor:color}
                    }>
                    <p>box content</p>
                </div>
            </div>

        );
    }

}

export default Result;
