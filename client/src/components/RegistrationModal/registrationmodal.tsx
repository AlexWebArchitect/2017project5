import * as React from 'react'
import itworx from '../../workers/itworx'
import * as Actions from '../../constants/actions'
import * as styles from './registrationmodal.css'
import * as STR from '../../constants/strings'


interface Props {
    // empty
}
interface State {
    visible: boolean
}

export default class RegistrationModal extends React.Component<Props, State> {

    private login: HTMLInputElement
    private password: HTMLInputElement
    private email: HTMLInputElement

    constructor(props: Props){
        super(props)

        this.state = { visible: false}

        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.registerNewUser = this.registerNewUser.bind(this)
    }

    componentDidMount(){
        itworx.subscribe(Actions.SHOW_REGISTRATION_MODAL, this.showModal)
        itworx.subscribe(Actions.REGISTER_NEW_USER, this.registerNewUser)
    }

    registerNewUser(action: Action){
        const user = {...action.payload, online: true }
        window.localStorage.setItem('user', JSON.stringify(user))
        this.closeModal()
        itworx.dispatch({type: Actions.SHOW_NEW_POST_MODAL, payload: true})
    }

    showModal(action: Action){
        this.setState({visible: action.payload})
    }
    closeModal() {
        this.setState({visible: false})
    }

    submitForm(){
        const payload = {
            login: this.login.value, 
            password: this.password.value,
            email: this.email.value
        }
        itworx.dispatch({type: Actions.REGISTER_NEW_USER, payload })
    }

    render(){
        if(!this.state.visible) return null
        const user = window.localStorage.getItem('user')
        const email = !!user ? null : <input type="email" 
                            className="form-control" 
                            ref={element=>this.email=element}
                            placeholder={STR.EMAIL}/>
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
                        <h4 className="modal-title">{STR.REGISTRATION_FORM}</h4>
                    </div>
                    <div className="modal-body">
                         <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                ref={element=>this.login=element}
                                placeholder={STR.LOGIN}/>
                        </div>
                        <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            ref={element=>this.password=element}
                            placeholder={STR.PASSWORD}/>
                        </div>
                        <div className="form-group">
                            {email}
                        </div>
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