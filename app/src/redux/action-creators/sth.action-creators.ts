import { STHActionTypeEnum } from '../actions-enums'
import { ISTHAction } from '../actions-interface'

// ---

export const sthActionCreator = (): ISTHAction => {
	return {
		type: STHActionTypeEnum.STH,
		payload: 'sth'
	}
}
