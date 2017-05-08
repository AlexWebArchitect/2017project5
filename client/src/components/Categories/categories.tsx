import * as React from 'react'
import * as Actions from '../../constants/actions'
import itworx from '../../workers/itworx'
import * as styles from './categories.css'

interface Props {
    categories: Array<Category>
}
interface State {}

export default class Categories extends React.Component <Props, State> {

    selectCategory(id: string){
        itworx.dispatch({type: Actions.SET_CURRENT_CATEGORY, payload: id})
    }

    render() {
        const items = this.props.categories.map(item => (
            <li key={item.id} 
                className={"list-group-item "+ styles.item}
                onClick = {()=>this.selectCategory(item.id)}>
                {item.name}
            </li>
        ))
        return (
            <ul className="list-group">{items}</ul>
        )
    }
}