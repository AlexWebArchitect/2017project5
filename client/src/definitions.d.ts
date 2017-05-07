
declare interface PostListItem {
    id: string
    user_id: string
    date: string
    category_id: string
    title: string
    content: string
    login: string
}

declare interface Category {
    id: string
    name: string
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