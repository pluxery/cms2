import {createContext} from 'react'

function noop() {
}

export const OrderContext = createContext({
    address: null,
    setAddress: noop,

})