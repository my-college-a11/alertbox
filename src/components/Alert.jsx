import React, { Component } from 'react'

class Alert extends React.Component{
    constructor(props){
        super(props);
        this.state = {isDismissed:false}
        this.DismissedAlert = this.DismissedAlert.bind(this);
    }
    DismissedAlert(){
        this.setState({
            isDismissed : true
        })
    }
    render(){
        const {children,title,type,id} = this.props;
        return this.state.isDismissed ? null : (
            <>
            <div className={`Toast toast--${type ? type : 'info'}`}> 
                <h1 id={id}>{title}</h1>
                <p>{children}</p>
                <button className='Toast__button'
                onClick={this.DismissedAlert}>
                    <span>X</span>
                </button>
            </div>
            </>
        )
    }
}
export default Alert;
