import React, {PureComponent} from 'react'

class InputForm extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <form className="form-authentication">
                    <label className="label-authentication">
                        {this.props.field.name}
                        <input className="input-authentication" type="text" name="name" placeholder={this.props.field.placeholder}/>
                    </label>
                </form>
            </React.Fragment>
        )
    }
}

export default InputForm