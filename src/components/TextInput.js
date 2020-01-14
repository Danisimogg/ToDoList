import React from 'react';
import PropsTypes from 'prop-types';

const TextInput = ({optional, onChangeInput, inputClassname, inputId, inputValidationMessage, inputValue, inputName, inputType, inputPlaceholder, idValidationMessages, labelId, inputLabel}) => {
    return (

        <label class="pure-material-textfield-outlined">
            <input placeholder=" " />
            <span>Textfield - optional</span>
            <div className="validation-error-message" id={idValidationMessages}> {inputValidationMessage} </div>

        </label>
    )
};

TextInput.propTypes = {
    optional: PropsTypes.bool,
    idValidationMessages: PropsTypes.string,
    labelId: PropsTypes.string,
    selectedState: PropsTypes.string,
    onChangeInput: PropsTypes.func,
    inputId: PropsTypes.string,
    inputClassname: PropsTypes.string,
    inputValidationMessage: PropsTypes.string,
    inputName: PropsTypes.string,
    inputValue: PropsTypes.any,
    inputType: PropsTypes.string,
    inputPlaceholder: PropsTypes.string,
    inputLabel: PropsTypes.any,
};
TextInput.defaultProps = {
    enabled: true,
    checked: false,
    optional: false
};


export default TextInput;
