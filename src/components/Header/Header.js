import React from 'react'
import "./Header.css"

export default function Header({ title }) {
    return (
        <>
            <h1 className="header" title="header-title" data-testid="header-test-id">
                {title}
            </h1>
            {false && <h3>Title</h3>}
        </>
    );
}
