/*
 * @jest-environment node
 */
import { scoreInitialState, scoreReducer } from './reducer';
import { SCORE_COMMAND } from '../dto/action.type';
import { ScoreDetail } from '../dto/state.type';

test('should handle SCORE_SERVER_CONNECTED', () => {
    expect(
        scoreReducer(scoreInitialState, {
            type: SCORE_COMMAND.SCORE_SERVER_CONNECTED,
        })
    ).toEqual({
        ...scoreInitialState,
        connected: true,
    });
});
test('should handle SCORE_UPDATE_SUCCESS', () => {
    const mockState: ScoreDetail[] = [{ name: 'wang', score: 12, id: '123' }];
    expect(
        scoreReducer(scoreInitialState, {
            type: SCORE_COMMAND.SCORE_UPDATE_SUCCESS,
            payload: mockState,
        })
    ).toEqual({
        ...scoreInitialState,
        scoreDetails: mockState,
    });
});
test('should keep same when passing same score details', () => {
    const mockState: ScoreDetail[] = [{ name: 'wang', score: 12, id: '123' }];
    expect(
        scoreReducer(
            { connected: true, scoreDetails: mockState },
            {
                type: SCORE_COMMAND.SCORE_UPDATE_SUCCESS,
                payload: mockState,
            }
        )
    ).toEqual({
        connected: true,
        scoreDetails: mockState,
    });
});
test('should handle SCORE_SERVER_DISCONNECTED', () => {
    expect(
        scoreReducer(scoreInitialState, {
            type: SCORE_COMMAND.SCORE_SERVER_DISCONNECTED,
        })
    ).toEqual({
        ...scoreInitialState,
        connected: false,
    });
});
