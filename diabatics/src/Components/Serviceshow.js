import React from 'react';

function ServiceShow() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* First Div */}
            <div style={{ flex: 1 }}>
                <h2>Title for First Div</h2>
                <p>This is the paragraph for the first div.</p>
                <img
                    src="image-url-for-first-div.jpg"
                    alt="Image for First Div"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>

            {/* Second Div */}
            <div style={{ flex: 1 }}>
                <h2>Title for Second Div</h2>
                <p>This is the paragraph for the second div.</p>
                <img
                    src="image-url-for-second-div.jpg"
                    alt="Image for Second Div"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
}

export default ServiceShow;
