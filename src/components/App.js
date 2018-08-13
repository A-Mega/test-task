import React, {PureComponent} from 'react'
import AuthenticationForm from './AuthenticationForm'


class App extends PureComponent {

    render() {
        console.log('App', this.props)
        return (
            <div> 
                <AuthenticationForm/>
           </div>
        )
    }
}

export default App