import React from 'react';

export default function Collection({ block }) {
    // Extract the title from the block properties
    const title = block.properties?.title?.[0]?.[0]

    return (
        <h1>{title}</h1>
    );
}