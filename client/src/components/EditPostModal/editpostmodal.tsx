import * as React from 'react'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'
import * as styles from './editpostmodal.css'
import * as STR from '../../constants/strings'

interface Props {}
interface State {
    visible: boolean
    title: string
    content: string
}

export default class EditPostModal extends React.Component <Props, State> {

    private title: HTMLInputElement
    private content: HTMLTextAreaElement
    private id: string

    constructor(props: Props){
        super(props)

        this.state = { 
            visible: false,
            title: '',
            content: '' 
        }

        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    componentDidMount(){
        itworx.subscribe(Actions.EDIT_POST_ITEM, this.showModal) 
    }

    showModal(action: Action){
        const { title, content } = action.payload
        this.id = action.payload.id
        this.setState({visible: true, title, content})
    }
    closeModal() {
       this.setState({visible: false})
    }

    submitForm(){
        const payload = {id: this.id, title: this.title.value, content: this.content.value}
        itworx.dispatch({type: Actions.UPDATE_POST_ITEM, payload})
        this.closeModal()
    }

    render(){
        if(!this.state.visible) return null
        return (
        <div className={styles.overlay} onClick={this.closeModal}>
            <div className={"modal-dialog"} 
                role="document" 
                onClick={e=>e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">{STR.EDIT_POST}</h4>
                    </div>
                    <div className="modal-body">
                         <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                defaultValue={this.state.title}
                                ref={element=>this.title=element}
                                placeholder={STR.POST_TITLE}/>
                        </div>
                        <textarea type="text" 
                            className="form-control" 
                            defaultValue={this.state.content}
                            ref={element=>this.content=element}
                            placeholder={STR.POST_CONTENT}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-default" 
                            data-dismiss="modal"
                            onClick={this.closeModal}>
                            {STR.CANCEL}
                        </button>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={this.submitForm}>
                            {STR.SUBMIT}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}