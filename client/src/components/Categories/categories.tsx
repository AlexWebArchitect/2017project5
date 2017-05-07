import * as React from 'react'
import * as Actions from '../../constants/actions'
import itworx from '../../workers/itworx'

interface Props {
    categories: Array<Category>
}
interface State {}

export default class Categories extends React.Component <Props, State> {


    render() {
        const items = this.props.categories.map(item => (
            <li key={item.id} className="well">{item.name}</li>
        ))
        return (
            <ul>{items}</ul>
        )
    }
}