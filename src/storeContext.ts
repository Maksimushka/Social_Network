import React from 'react'
import {StoreType} from "./Redux/state";

const StoreContext = React.createContext({} as StoreType)

export default StoreContext