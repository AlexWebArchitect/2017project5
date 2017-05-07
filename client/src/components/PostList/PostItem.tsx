import * as React from 'react'
import * as styles from './postlist.css'
import itworx from '../../workers/itworx'
import {R_U_SURE} from '../../constants/strings'
import {EDIT_POST_ITEM, DELETE_POST_ITEM} from '../../constants/actions'

interface Props {
    post: PostListItem
}
interface State {
    // empty 
}
export default class PostItem extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props)

        this.deletePostItem = this.deletePostItem.bind(this)
        this.editPostItem = this.editPostItem.bind(this)
    }

    deletePostItem(){
        const {id, title} = this.props.post
        if(window.confirm(`${R_U_SURE} ${title}?`)) 
            itworx.dispatch({type: DELETE_POST_ITEM, payload: id })
    }

    editPostItem() {
       itworx.dispatch({type: EDIT_POST_ITEM, payload: this.props.post })
    }

    render() {
        const {post} = this.props

        const buttonGroup = (
            <div className={styles['button-group']}>
                <button className="btn btn-default btn-sm"
                        onClick={this.editPostItem}>
                    <span className="glyphicon glyphicon-edit"/>
                </button>
                <button className="btn btn-default btn-sm" 
                        onClick={this.deletePostItem}
                >
                    <span className="glyphicon glyphicon-trash"/>
                </button>
            </div>
        )

        const containerStyle = [styles.container, 'well'].join(' ') 
        return (
            <div className={containerStyle}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <h6>{new Date(post.date).toLocaleDateString('Ru')}</h6>
                {buttonGroup}
            </div>
        )
    }
}