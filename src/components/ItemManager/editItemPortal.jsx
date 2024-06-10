import { useState } from 'react';
import { createPortal } from 'react-dom';
import "./styles.css";

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Show modal using a portal
            </button>
            {showModal && createPortal(
                <div className="modal">
                    <div>I'm a modal dialog</div>
                    <button onClick={()=> setShowModal(false)}>Close</button>
                </div>,
                document.body
            )}
        </>
    );
}
