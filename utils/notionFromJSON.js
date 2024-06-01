// Retrieve data from JSON data Object ==================================>
import { data } from "@utils/data"

function getPages() {
    return data
}

function getChildrenPage(id) {
    const page = data.map(page => page.children.find(page => page.id === id))[0]
    return page
}

function getChildDatabasePages(id) {
    const childDataBasePages = data.find(page => page.id === id).children
    return childDataBasePages
}

function getPageTitle(id) {
    const page = data.find(page => page.id === id)
    return page.header.title
}

export { getPages, getChildrenPage, getChildDatabasePages, getPageTitle }