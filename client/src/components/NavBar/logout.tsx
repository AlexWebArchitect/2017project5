import * as React from 'react'
import * as STR from '../../constants/strings'

interface Props {
    onLogout():void
}
interface State {}

export default class  Logout extends React.Component <Props, State> {
    
    render(){
        const userID = window.localStorage.getItem('user')
        if(!userID) return null
        return (
            <button className="btn btn-default"
                onClick={this.props.onLogout}>
                <span className="glyphicon glyphicon-log-out"/>
                &nbsp;{STR.LOGOUT}
            </button>
        )
    }
}
