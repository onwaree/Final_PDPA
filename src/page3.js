import React from "react";
import "./styles.css";

export default function Page3() {
  return (
    <>      
      <div
        className="video-container"
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          className="video"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          loop
          muted
        >
          <source src="./img/page3.mp4" type="video/mp4" />
        </video>

        {/* ข้อความที่จะแสดงบนวิดีโอ */}
        <h1
          className="cursor3 typewriter-animation3"
          style={{
            position: "absolute",
            top: "20%",  // จัดตำแหน่งให้ข้อความอยู่กลาง
            left: "40%",  // จัดตำแหน่งให้ข้อความอยู่กลาง
            transform: "translate(-50%, -50%)",  // ย้ายข้อความไปที่กลาง
            fontSize: "3rem",
            background: "linear-gradient(to top,rgb(255, 255, 255), #ffc400)", // เพิ่มพื้นหลังไล่สี
            "-webkit-background-clip": "text", // ทำให้ gradient ใช้กับข้อความ
            color: "transparent", // ทำให้ตัวอักษรโปร่งใสเพื่อให้ gradient แสดง
            textShadow: "3px 3px rgb(0, 0, 0)", // เงาของตัวอักษร
            zIndex: 10,
          }}
        >
          Experience
        </h1>

        <div
            style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            paddingLeft: "17%",
            position: "absolute",  // ให้ข้อมูลนี้อยู่เหนือคลิป
            bottom: "45%",  // อยู่ที่ด้านล่างของหน้าจอ
            zIndex: 20,
            }}
        >

          <div style={{ textAlign: "left", lineHeight: "1.7", padding: "10px 0" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "25px" }}>
              - 2019-2021 | Eastern Technology College (E-TECH) <br/>
              Internship <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;Being an intern in the registration department Working <br/>
              on new student application review and check documents
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
