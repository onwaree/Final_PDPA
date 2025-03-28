import React from "react";
import "./styles.css";

export default function Page4() {
    return (
        <>      
            <div 
                className="video-container" 
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden"
                }}
            >    
                <video 
                    className="video" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    autoPlay 
                    loop 
                    muted
                >
                    <source src="./img/page4.mp4" type="video/mp4" />
                </video>

                <h1 
                    className="cursor4 typewriter-animation4" 
                    style={{
                        position: "absolute", 
                        top: "20%", 
                        left: "50%", 
                        transform: "translateX(-50%)", 
                        fontSize: "3rem", 
                        background: "linear-gradient(to top, #ffffff, #ffc400)", // เพิ่มพื้นหลังไล่สี
                        "-webkit-background-clip": "text",  // ทำให้ gradient ใช้กับข้อความ
                        color: "transparent",  // ทำให้ตัวอักษรโปร่งใสเพื่อให้ gradient แสดง
                        textShadow: "3px 3px rgb(241, 117, 1)", // เงาของตัวอักษร
                        zIndex: 10
                    }}
                >
                    Achievement
                </h1>

                <div 
                    style={{
                        display: "flex",
                        justifyContent: "center", 
                        alignItems: "center",
                        position: "absolute", 
                        bottom: "20%",
                        width: "100%",
                    }}
                >
                    <img 
                        src="/img/me2.jpg" 
                        alt="img" 
                        style={{ 
                            height: "300px", 
                            width: "300px", 
                            objectFit: "cover", 
                            borderRadius: "15%",
                            boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
                            marginRight: "3%",
                            animation: "scaleAnimation 2s infinite alternate",
                        }}  
                    />

                    <div style={{ textAlign: "left", lineHeight: "1.7", color: "black" }}> 
                        <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>
                            - 2022 | The 29th National Skill <br/>
                            CompetitionRegional Level, Northern Group, <br/>
                            Web Design Branch ( Received 1st runner-up award ) <br/>
                        </h2>
                        <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>
                            - 2021 | The 24th Computer Programming <br/>
                            Competition of Thailand (nsc) through the program  <br/>
                            Through the project proposal round Funded around  <br/>
                            the proposal, Eastern Region
                        </h2>
                    </div>

                </div>
            </div>
        </>
    );
}
