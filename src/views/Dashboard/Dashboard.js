import React from "react";
import bgImage from "assets/img/auth-bg.jpg";

function Dashboard() {
  return (
    <>
      <div style={{ height: '90.5vh' }}>
        Home page
      </div>
      <div
        className="full-page-background"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    </>
  );
}

export default Dashboard;
