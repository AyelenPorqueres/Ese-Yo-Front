'use client';
import React from 'react';
import "./instagramFeed.css";

export function InstagramFeed() {
    return (
        <div id="ig" className="instagramFeedContainer">
            <iframe
                style={{ width: "100%", height: "790px", padding: 25 }}
                src="https://www.instagram.com/eseyofundacion/embed"
                frameBorder="0"
                scrolling="no"
            ></iframe>
        </div>
    );
}
