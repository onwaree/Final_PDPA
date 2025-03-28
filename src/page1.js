import React from "react";
import "./styles.css";

export default function Page1() {
    return (
        <div
            className="video-container"
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Video background */}
            <video
                className="video"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                autoPlay
                loop
                muted
            >
                <source src="./img/page1.mp4" type="video/mp4" />
            </video>

            {/* Title/Text Overlay on the video */}
            <h1
                className="cursor typewriter-animation"
                style={{
                    position: "absolute",
                    top: "20%", // Adjust this value to position the text vertically
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center horizontally and vertically
                    fontSize: "3rem",
                    background: "linear-gradient(to top,rgb(255, 255, 255),rgb(236, 189, 128))",
                    "-webkit-background-clip": "text",
                    color: "transparent", // Make the text transparent to show gradient
                    textShadow: "3px 3px rgb(136, 100, 51)", // Add text shadow for visibility
                    zIndex: 10,
                }}
            >
                Personal Data
            </h1>

            {/* Flexbox container for image and personal data */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "50px",
                    position: "absolute",
                    top: "50%",  // Center the section vertically
                    left: "50%",  // Center the section horizontally
                    transform: "translate(-50%, -50%)",  // Center the content
                }}
            >
                {/* Personal image */}
                <img
                    src="/img/me.jpg"
                    alt="Profile"
                    style={{
                        height: "400px",
                        width: "400px",
                        objectFit: "cover",
                        borderRadius: "20%",
                        animation: "scaleAnimation 2s infinite alternate",
                    }}
                />

                {/* Personal Information */}
                <div style={{ textAlign: "left", lineHeight: "1.6", color: "black" }}>
                    <h2>Name: Onwaree Srimaya</h2>
                    <h2>ID Student: 6603052423014</h2>
                    <h2>Nickname: Pim</h2>
                    <h2>Date of Birth: 21 August 2002</h2>
                    <h2>Age: 22 years old</h2>
                    <h2>Weight, Height: 64 kg, 163 cm</h2>
                    <h2>Nationality: Thai</h2>
                </div>
            </div>
        </div>
    );
}
