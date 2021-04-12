import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

// ---

import { sthReducer } from './sth.reducer'
import { webSocketBCReducer } from './webSocketBC.reducer'

// ---

export const rootReducer = combineReducers({
	sth: sthReducer,
	bcSocket: webSocketBCReducer,
	router: routerReducer
})

export type RootState = ReturnType<typeof rootReducer>

// {
// 	"command": "request_session",
// 	"params": {
// 	"site_id": 1,
// 	"language": "arm",
// 	// optional
// 	"source": 1, // source field
// 	"terminal": 123 // terminal field
// 	"afec": "Art3sd3dsAD21Bn..." // Device fingerprint
// 	}
// 	}
