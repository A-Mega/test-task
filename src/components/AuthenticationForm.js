import React, {PureComponent} from 'react'
import InputFormList from './InputFormList/index'
import fields from '../inputFields'

class AuthenticationForm extends PureComponent {

    render() {
        console.log('AuthenticationForm', this.props)
        return (
            <React.Fragment>
                <h1 className="h1-authentication">Зарегистрируйтесь</h1>
                <div>
                    <table>
                        <tbody>
                            <tr><td><input type="radio" name="buy" value="radio_buy" />я покупаю музыку</td></tr>
                            <tr><td><input type="radio" name="sell" value="radio_sell" />продаю права на синхронизацию</td></tr>
                        </tbody>
                    </table>
                    <InputFormList fields={fields}/>
                    <button className="button-authentication">Зарегистрироваться</button>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthenticationForm