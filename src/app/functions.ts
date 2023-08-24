import { metadata } from "./layout"

const setMetaData = (title: string, description: string) => {
    metadata.title = title;
    metadata.description = description;
}

export { setMetaData };