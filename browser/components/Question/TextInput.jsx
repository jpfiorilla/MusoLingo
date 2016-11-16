import React from 'react';
export default class TextInput extends React.Component {
    render() {
        return (
            <div>
                <div className="text-input-question">
                    <div className="row">
                        <div className="col-xs-5">
                            
                            Half note
                            <i className="fa fa-volume-up"></i>
                        </div>
                        <div className="col-xs-1">></div>
                        <input id="user-answer" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}