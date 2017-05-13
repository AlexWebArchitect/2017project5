import * as React from 'react'
import * as styles from './user.css'

interface Props {}
interface State {}

export default class User extends React.Component<Props, State> {
    render(){
        let user = null
        try {
            user = JSON.parse(window.localStorage.getItem('user')) 
            if(!user.online) return null
        }catch(error) { return null }

         return (
             <span>
                <img className={styles.img} src={`/img/${user.id}.svg`}/>
                <label>&nbsp; {user.login} &nbsp;</label>
            </span>
         )
    }
}
