
declare interface PostListItem {
    id: string
    user_id: string
    date: string
    subcategory_id: string
    title: string
    content: string
}

declare interface Action {
    type: string
    payload?: any
}

declare interface User {
    id: string
    login: string
    password: string
    error?: string
}