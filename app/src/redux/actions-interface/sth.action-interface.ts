import { STHActionTypeEnum } from '../actions-enums'

export interface ISTHAction {
	type: STHActionTypeEnum.STH
	payload: any
}

export type SthAction = ISTHAction
