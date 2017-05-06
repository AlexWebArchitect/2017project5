import * as React from 'react'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'
// import * as styles from './navbar.css'

interface Props {}
interface State {}

export default class NavBar extends React.Component <Props, State> {

    searchPost(event){
        itworx.dispatch({type: Actions.SEARCH_POST_ITEM, payload: event.target.value})
    }

    newPost() {
        itworx.dispatch({type: Actions.SHOW_NEW_POST_MODAL, payload: true})
    }

    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-form navbar-left">
                        <div className="form-group">
                            <button className="btn btn-default"
                                onClick={this.newPost}>
                                <span className="glyphicon glyphicon-plus"/>
                                &nbsp;New Post
                            </button>
                        </div>
                    </div>
                    <div className="navbar-form navbar-right">
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                onKeyUp={this.searchPost}
                                placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}