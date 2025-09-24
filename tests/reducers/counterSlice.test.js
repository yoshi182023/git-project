// reducers/counterSlice.test.js
import counterReducer, {
    increment,
    decrement,
    setCounter,
} from 'src/reducers/counterSlice';

describe('counter reducers', () => {
    it('should return the initial state', () => {
        expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
            value: 0,
        });
    });

    it('should handle increment', () => {
        const initialState = { value: 5 };
        const newState = counterReducer(initialState, increment());
        expect(newState.value).toBe(6);
    });

    it('should handle decrement', () => {
        const initialState = { value: 5 };
        const newState = counterReducer(initialState, decrement());
        expect(newState.value).toBe(4);
    });

    it('should handle setCounter', () => {
        const newState = counterReducer({ value: 0 }, setCounter(123));
        expect(newState.value).toBe(123);
    });
});
