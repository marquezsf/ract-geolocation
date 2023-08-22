import React from 'react';

const HemisphereDisplay = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.error(error)
    );
    return (
    <div>
        In Northern Hemisphere
    </div>
    )
}

export default HemisphereDisplay