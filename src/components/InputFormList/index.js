import React, {PureComponent} from 'react'
import InputForm from '../InputForm'
import './style.css'

export default class InputFormList extends PureComponent {

    render() {
        console.log('InputFormList', this.props)
        
        const articleElements = this.props.fields.map((field, index) =>
            <li key = {field.id} className="inputform-list__li">
                <InputForm field = {field} />
            </li>
        )
        console.log('articleElements', articleElements)
        return (
            <ul className="inputform-list__ul">
                {articleElements}
            </ul>
        )
        
    }
}