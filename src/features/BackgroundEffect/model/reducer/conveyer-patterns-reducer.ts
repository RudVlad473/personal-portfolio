import { ConveyerPatternEntities } from "../../lib/types"

// An enum with all the types of actions to use in our reducer
export enum ActionType {
  CONVEY_UP = "CONVEY_UP",
  RESET_PATTERNS = "RESET_PATTERNS",
}

export type ConveyUpPayload = undefined
export type ResetPatternsPayload = ConveyerPatternEntities

// An interface for our actions
export type Action =
  | {
      type: ActionType.CONVEY_UP
      payload: ConveyUpPayload
    }
  | {
      type: ActionType.RESET_PATTERNS
      payload: ResetPatternsPayload
    }

// An interface for our state
export type State = ConveyerPatternEntities

// Our reducer function that uses a switch statement to handle our actions
export function conveyerPatternsReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.CONVEY_UP: {
      if (!state.length) {
        return state
      }

      const conveyedPatterns = state.map((pattern) => ({
        ...pattern,
        translationCount: pattern.translationCount + 1,
      }))

      const first = conveyedPatterns.shift()!
      first.translationCount = 0

      return [...conveyedPatterns, first]
    }
    case ActionType.RESET_PATTERNS: {
      return [...action.payload]
    }
    default: {
      throw new Error(`Case for such an action (${action}) does not exist`)
    }
  }
}
