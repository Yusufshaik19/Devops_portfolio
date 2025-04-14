import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then(res => setApiMessage(res.data.message))
      .catch(() => setApiMessage("❌ Could not fetch backend message."));
  }, []);

  return (
    <div style={{
      fontFamily: "Segoe UI, Arial",
      backgroundColor: "#f4f6f8",
      padding: "40px",
      minHeight: "100vh"
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#007acc" }}>👋 Hi, I'm Yusuf Vidya Sagar Shaik</h1>
        <h3> DevOps Trainee | AWS | Docker | Jenkins | CI/CD | FastAPI | GitHub Actions </h3>

        <p style={{ fontStyle: "italic", marginTop: "10px" }}>
          <strong>API Status:</strong> {apiMessage}
        </p>

        <section>
          <h2>📄 Profile Summary</h2>
          <p>
            DevOps enthusiast with 10 months of experience at InfinitudeIT, focused on building and deploying microservices using FastAPI, Docker, and AWS.
            Adept in CI/CD pipelines, automation, and infrastructure as code. Actively seeking a DevOps Trainee role in Hyderabad.
          </p>
        </section>

        <section>
          <h2>🛠 Technical Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <ul>
              <li>☁️ AWS (EC2, S3, IAM, CloudWatch)</li>
              <li>🐧 Linux (Ubuntu, CentOS)</li>
              <li>🐳 Docker, Docker Compose</li>
              <li>📦 Jenkins, GitHub Actions</li>
            </ul>
            <ul>
              <li>⚙️ FastAPI Microservices</li>
              <li>🛠 Shell Scripting, Bash</li>
              <li>🐍 Python</li>
              <li>📈 Prometheus, Grafana (basic)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>💼 Key Projects</h2>

          <h4>📌 Event Management System – Microservices Transformation</h4>
          <ul>
            <li>Converted monolithic app into modular services (users, events, tickets, payments)</li>
            <li>Dockerized each service and deployed using Docker Compose on AWS EC2</li>
            <li>CI/CD with GitHub Actions for build, test, and deploy pipelines</li>
            <li>Basic logging and monitoring using AWS CloudWatch</li>
          </ul>

          <h4>📌 Static Website Deployment – Docker & GitHub Actions on AWS</h4>
          <ul>
            <li>Deployed a static HTML/CSS site using Docker containers on AWS EC2</li>
            <li>Set up GitHub Actions to automate CI/CD on every push</li>
            <li>Ensured production-ready builds with rollback and health checks</li>
          </ul>

          <h4>📌 Portfolio Resume Site – CI/CD with Jenkins & Docker</h4>
          <ul>
            <li>Built personal site using React (frontend) and Flask (backend)</li>
            <li>Configured Jenkins pipeline on Amazon Linux EC2 for automated deployments</li>
            <li>Dockerized both services and managed orchestration using `docker-compose`</li>
            <li>Secured with HTTPS and deployed on custom domain</li>
          </ul>
        </section>

        <section>
          <h2>📜 Certifications</h2>
          <ul>
            <li>PostgreSQL for Everybody – Coursera</li>
            <li>AWS Cloud Practitioner – In Progress</li>
            <li>2 AWS Digital Badges – Cloud Computing, Storage</li>
          </ul>
        </section>

        <section>
          <h2>📫 Contact</h2>
          <p>Email: <a href="mailto:sk.yusufyvs@gmail.com">sk.yusufyvs@gmail.com</a></p>
          <p>Phone: 7658961289</p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/yusufshaik19" target="_blank" rel="noreferrer">yusufshaik19</a><br />
            GitHub: <a href="https://github.com/Yusufshaik19" target="_blank" rel="noreferrer">Yusufshaik19</a>
          </p>
        </section>

        <section>
          <h2>🔥 Why Me?</h2>
          <ul>
            <li>✅ Hands-on DevOps project experience with real-world deployments</li>
            <li>✅ Familiar with Docker, Jenkins, AWS, CI/CD best practices</li>
            <li>✅ Available immediately, based in Hyderabad</li>
            <li>✅ Eager to upskill in Kubernetes and modern cloud-native stacks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
