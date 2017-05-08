import * as React from 'react'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'
import * as styles from './navbar.css'

interface Props {}
interface State {
    current: Category
    categories: Array<Category>
    minibar: boolean
}

export default class NavBar extends React.Component <Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = { 
            current: {id: '1', name: 'general'}, 
            categories: [],
            minibar: window.innerWidth < 768
        }

        this.searchPost = this.searchPost.bind(this)
        this.newPost = this.newPost.bind(this)
        this.setCategory = this.setCategory.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.loadCategories = this.loadCategories.bind(this)
        this.toggleMinibar = this.toggleMinibar.bind(this)
    }

    componentDidMount(){
        itworx.subscribe(Actions.SET_CURRENT_CATEGORY, this.setCategory)
        itworx.subscribe(Actions.LOAD_CATEGORIES, this.loadCategories)
    }

    toggleMinibar(){
        this.setState(state=>({minibar: !state.minibar}))
    }

    loadCategories(action: Action){
        const categories = action.payload as Category[]
        this.setState({categories})
    }

    setCategory(action: Action){
        const current = action.payload
        this.setState({current})
    }

    searchPost(event){
        itworx.dispatch({type: Actions.SEARCH_POST_ITEM, payload: event.target.value})
    }

    newPost() {
        const id = window.localStorage.getItem('user')
        if(!!id)
            itworx.dispatch({type: Actions.SHOW_NEW_POST_MODAL, payload: true})
        else 
            itworx.dispatch({type: Actions.SHOW_REGISTRATION_MODAL, payload: true})
    }

    handleClick(category: Category){
        itworx.dispatch({type: Actions.SET_CURRENT_CATEGORY, payload: category})
    }
    render(){

        const menu = this.state.categories.map(item => (
            item.id == this.state.current.id 
                ?  <li key={item.id} className="active"><a href="#">{item.name}</a></li>
                : <li key={item.id} onClick={()=>this.handleClick(item)}><a href="#">{item.name}</a></li>
        ))

        const menubar = this.state.minibar ? styles.hidden : styles.visible
        const buttonbar = window.innerWidth < 768 ? styles.visible : styles.hidden

        return  ( 
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className={menubar}>
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                {menu}
                            </ul>
                        </div>
                        <div className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" 
                                    className="form-control" 
                                    onKeyUp={this.searchPost}
                                    placeholder="Search"/>
                                <button className="btn btn-default"
                                    onClick={this.newPost}>
                                    <span className="glyphicon glyphicon-plus"/>
                                    &nbsp;New Post
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button + ' ' + buttonbar}>
                        <button className="btn btn-default small"
                            onClick={this.toggleMinibar}>
                                <span className="glyphicon glyphicon-align-justify" />
                        </button>
                        
                    </div>
                </div>
            </nav>
        )
    }
}