import {forwardRef, useImperativeHandle, useRef} from 'react';
const ResultModal =  forwardRef( function ResultModal({ result, targetTime}, ref) {
    const dialog = useRef();

    // now ref refers to dialog internally
    useImperativeHandle(ref, () => {
        return {
         open() {
            dialog.current.showModal();
         }
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result} </h2>
            <p>
                The target was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;