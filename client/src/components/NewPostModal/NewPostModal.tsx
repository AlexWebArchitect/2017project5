import * as React from 'react'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'
import * as styles from './new-post-modal.css'
interface Props {
    // empty
}
interface State {
    visible: boolean
}

export default class NewPostModal extends React.Component<Props, State> {

    constructor(props: Props){
        super(props)

        this.state = { visible: false }

        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
    }

    componentDidMount(){
        itworx.subscribe(Actions.SHOW_NEW_POST_MODAL, this.showModal)
    }

    showModal(action: Action){
        this.setState({visible: action.payload})
    }
    closeModal(event) {
        itworx.dispatch({type: Actions.SHOW_NEW_POST_MODAL, payload: false})
    }

    render(){
        if(!this.state.visible) return null
        return (
        <div className={styles.conainer}>
            <div className={"modal-dialog "+ styles.dialog} role="document">
                <div className={styles.overlay}
                    onClick={this.closeModal} />
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={(e)=>this.closeModal(e)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">Add Post</h4>
                    </div>
                    <div className="modal-body">
                        <p>add some input fiels over here;</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-default" 
                            data-dismiss="modal"
                            onClick={this.closeModal}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}