/**
 * Created by xy on 15/4/13.
 */
import React from 'react';
import FormField from './formField';
import Constants from "./constants";
import classNames from 'classnames';

export default class TextAreaFormField extends FormField{
    constructor(props) {
        super(props);
    }
    render() {
        let _mode;
        let className = classNames(this.props.bsStyle, this.props.className);

        if (this.props.mode==Constants.MODE.edit) {
            _mode=<li><textarea  ref="el">{this.props.value}</textarea></li>
        }else{
            _mode=<li><p>{this.props.value}</p></li>
        }
        return (
            <div className={className}>
                <label className="kuma-formfield-label">{this.props.label}<i>{this.props.isRequire?"*":""}</i></label>
                <ul>{_mode} </ul>
            </div>
        );
    }
}