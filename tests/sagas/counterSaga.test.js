// sagas/counterSaga.test.js
import { testSaga } from 'redux-saga-test-plan';
import counterSaga, { handleAsyncIncrement, handleAsyncDecrement } from 'src/sagas/counterSaga';
import { increment, decrement } from 'src/reducers/counterSlice';

describe('counterSaga', () => {
    it('should handle async increment', () => {
        testSaga(counterSaga)
            .next()
            .takeEvery('counter/asyncIncrement', handleAsyncIncrement)
            .next()
            .takeEvery('counter/asyncDecrement', handleAsyncDecrement)
            .next()
            .isDone();
    });

    it('should perform async increment worker', () => {
        testSaga(handleAsyncIncrement)
            .next()
            .delay(1000)
            .next()
            .put(increment())
            .next()
            .isDone();
    });

    it('should perform async decrement worker', () => {
        testSaga(handleAsyncDecrement)
            .next()
            .delay(1000)
            .next()
            .put(decrement())
            .next()
            .isDone();
    });
});
