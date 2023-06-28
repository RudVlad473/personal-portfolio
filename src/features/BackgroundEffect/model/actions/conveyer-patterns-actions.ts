import { Action, ActionType, ConveyUpPayload, ResetPatternsPayload } from "../reducer"

export const conveyUp = (args: ConveyUpPayload = undefined): Action => ({
  type: ActionType.CONVEY_UP,
  payload: args,
})

export const resetPatterns = (args: ResetPatternsPayload): Action => ({
  type: ActionType.RESET_PATTERNS,
  payload: args,
})
