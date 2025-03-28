import React from "react";
import "./styles.css";

export default function Page2(){

    return(
        <>          
        <div 
            style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: "url('/img/bg2.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", 
            color: "black",
            gap: "20px", 
            padding: "20px",
            }} 
        >

            <h1
                class="cursor2 typewriter-animation2"> 
                Education Background
            </h1>


            <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "20px",  
                background: "linear-gradient(to bottom, #619a53, #d9dadc)"
            }}></div>

            <div 
                style={{
                    display: "flex",
                    justifyContent: "flex-end", 
                    alignItems: "center",
                    width: "100%", 
                }}
            >
                <div style={{ textAlign: "left", lineHeight: "1.7", padding: "10px 0" }}>

                    {/* Bachelor's Degree Section */}
                    <div style={{
                        marginBottom: "30px",
                        display: "flex",
                        alignItems: "center",  // Vertically center the content
                    }}>
                        <img 
                            src="/img/logo_kmutnb.png" 
                            alt="img" 
                            style={{ 
                                height: "10%", 
                                width: "10%", 
                                objectFit: "cover", 
                                animation: "scaleAnimation 2s infinite alternate",
                                marginRight: "20px", // Space between the logo and text
                            }}  
                        />
                        <div>
                            <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
                                - Bachelor's Degree in Electronic Technology, 2025 <br/>
                                College of Industrial Technology, <br/>
                                King Mongkut's University of Technology North Bangkok
                            </h2>
                        </div>
                    </div>

                    {/* Diploma Section */}
                    <div style={{
                        marginBottom: "30px",
                        display: "flex",
                        alignItems: "center",  // Vertically center the content
                    }}>
                        <img 
                            src="/img/logo_etech.png" 
                            alt="img" 
                            style={{ 
                                height: "10%", 
                                width: "10%", 
                                objectFit: "cover", 
                                animation: "scaleAnimation 2s infinite alternate",
                                marginRight: "20px", // Space between the logo and text
                            }}  
                        />
                        <div>
                            <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
                                - Diploma in Information Technology, 2023 <br/>
                                Eastern Technology College (E-TECH)
                            </h2>
                        </div>
                    </div>

                    {/* Vocational Certificate Section */}
                    <div style={{
                        marginBottom: "30px",
                        display: "flex",
                        alignItems: "center",  // Vertically center the content
                    }}>
                        <img 
                            src="/img/logo_etech.png" 
                            alt="img" 
                            style={{ 
                                height: "10%", 
                                width: "10%", 
                                objectFit: "cover", 
                                animation: "scaleAnimation 2s infinite alternate",
                                marginRight: "20px", // Space between the logo and text
                            }}  
                        />
                        <div>
                            <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
                                - Vocational Certificate in Business Computer, 2021 <br/>
                                Eastern Technology College (E-TECH)
                            </h2>
                        </div>
                    </div>

                    </div>



            </div>


        </div>
        </>

    )
}