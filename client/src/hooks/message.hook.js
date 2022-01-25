import {useCallback} from 'react'
import "../Auth/Auth.css"


export const useMessage = () => {
    return useCallback(text => {
        if (window.M && text) {
            window.M.toast({ html: '<h3 class="toast">' + text + '</h3>' })
        }
    }, [])
}