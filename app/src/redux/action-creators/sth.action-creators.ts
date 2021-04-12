import { STHActionTypeEnum } from '../action-enums'
import { ISTHAction } from '../action-interfaces'

// ---

export const sthActionCreator = (): ISTHAction => {
  return {
    type: STHActionTypeEnum.STH,
    payload: 'sth'
  }
}
