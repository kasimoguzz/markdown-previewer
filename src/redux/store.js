import {configureStore} from '@reduxjs/toolkit'
import MarkdownSlice from './Markdown/MarkdownSlice'

export const store = configureStore({
    reducer: {
        markdown: MarkdownSlice
    }
})