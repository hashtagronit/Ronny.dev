import React, { Fragment } from "react";
import "./TapeSectionCSS.css";
import star from "./star.svg"; // Import as image, NOT as ReactComponent

const words = [
    "End-to-End Web App",
    "Reliable",
    "Responsive",
    "Robust",
    "Scalable",
    "Secure",
    "Accessible",
    "User Friendly",
    "Maintainable",
    "Interactive",
    "Optimized",
    "Usable",
    "Rapid Prototyping",
    "Feature-Rich"
];

const TapeSection = () => {
    return (
        <div className="tape-section">
            <div className="tape-gradient">
                <div className="tape-container">
                    <div className="tape-scroll">
                        {[...Array(2)].map((_, idx) => (
                            <Fragment key={idx}>
                                {words.map((word) => (
                                    <div key={`${idx}-${word}`} className="tape-item">
                                        <span>{word}</span>
                                        <img src={star} alt="star" className="star" />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TapeSection;
