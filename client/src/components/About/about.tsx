import * as React from 'react'
import * as styles from './about.css'
interface Props {}
interface State {
    visible: boolean
}

export default class About extends React.Component <Props, State> {

    constructor(props: Props){
        super(props)

        this.state = { 
            visible: true
        }

        this.closeModal = this.closeModal.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    closeModal() {
       this.setState({visible: false})
    }

    submitForm(){
       // do someyhing
        this.closeModal()
    }

    render(){


        return (
            <div className={styles.overlay} onClick={this.closeModal}>
                <div className="video-wrapper">
                    <video className="bg-video" src="http://www.piedpiper.com/app/themes/pied-piper/dist/images/video-bg.mp4" ></video>
                </div>
            <div className={"modal-dialog "+ styles.dialog} 
                role="document" 
                onClick={e=>e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" 
                            className="close btn btn-default small" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeModal}>
                            <h6>рус</h6>
                        </button>
                        <h4 className="modal-title">About</h4>
                    </div>
                    <div className={"modal-body " + styles.body}>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
        <p>Richard is the Founder of Pied Piper, and it was his choice to split amicably from PiperChat. He was not fired.</p>
        <p>While Richard gives PiperChat his blessing and a license to his compression algorithm — an algorithm some have called a game-changing technology worth seeing through to its greatest potential to impact the world — he is now focusing on a new project. He can’t go into specifics at this time, but let’s just say it’s going to be pretty big, and not crazy.</p>
        <p>Richard first moved to Silicon Valley to study computer science at Stanford. He left four credits shy of graduation to concentrate on his true passion: compressing data. He created Pied Piper to pursue that passion and bring his middle-out algorithm to all. He and his team launched the Pied Piper platform earlier this year, which didn’t quite catch on with the public, but that was no reflection on the tech. The tech remains revolutionary.</p>
        <p>As he continues his work on Pied Piper, Richard remains a trusted friend and advisor to PiperChat, a company that would not exist without his algorithm. Richard wishes new CEO Dinesh Chugtai the best of luck, and he thinks he handled the whole thing very maturely.</p>
        <p>In his spare time, Richard meditates on the value of innovation over wealth and popularity. He also enjoys amateur astronomy.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-default" 
                            data-dismiss="modal"
                            onClick={this.closeModal}>
                            Cancel
                        </button>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={this.submitForm}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}