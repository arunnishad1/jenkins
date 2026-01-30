# 🚀 Node.js CI/CD Pipeline using Jenkins, Docker & GitHub

This project demonstrates a **complete CI/CD pipeline** for a Node.js application using **Jenkins**, **Docker**, and **GitHub**.

Whenever code is pushed to GitHub, Jenkins automatically:

* Pulls the latest code
* Runs basic unit tests
* Builds a Docker image
* Runs the application inside a Docker container

This project is designed to be **simple, clear, and beginner-friendly**, while still following real-world DevOps practices.

---

## 🧩 Architecture Overview

1. Developer pushes code to GitHub
2. Jenkins fetches source code from GitHub
3. Jenkins executes the Jenkinsfile
4. Unit tests are executed
5. Docker image is built on Jenkins server
6. Docker container is started
7. Application runs successfully

---

## 📂 Project Structure

```
.
├── app/                  # Node.js application source code
│   ├── app.js
│   ├── package.json
│   └── test/             # Unit test files
├── Dockerfile            # Docker image definition
├── Jenkinsfile           # Jenkins CI/CD pipeline
├── .gitignore
└── README.md
```

---

## 📋 Prerequisites

Before starting, ensure you have:

* GitHub account
* Jenkins server (EC2 / local VM)
* Jenkins installed and running
* Docker installed on Jenkins server
* Node.js installed (for test execution)
* Git installed

---

## ⚙️ Jenkins Setup

### Install Required Jenkins Plugins

* Git Plugin
* Pipeline Plugin
* Docker Pipeline Plugin

---

## 🔗 Step 1: Create Jenkins Pipeline Job

1. Open Jenkins dashboard
2. Click **New Item**
3. Select **Pipeline**
4. Give job name
5. Under **Pipeline section**:

   * Definition: *Pipeline script from SCM*
   * SCM: Git
   * Repository URL: GitHub repository URL
   * Branch: `main` or `master`
   * Script Path: `Jenkinsfile`

Save the job.

---

## 📄 Step 2: Jenkinsfile Overview

The Jenkinsfile performs the following stages:

1. Checkout source code
2. Install dependencies
3. Run unit tests
4. Build Docker image
5. Run Docker container

---

## 🧪 Step 3: Unit Testing Stage

* Jenkins runs basic unit tests using npm
* Pipeline fails if tests do not pass

Example command used:

```bash
npm test
```

---

## 🐳 Step 4: Docker Image Build

* Jenkins builds the Docker image using Dockerfile
* Image is built on Jenkins server

Example command:

```bash
docker build -t nodejs-jenkins-app .
```

---

## ▶️ Step 5: Run Docker Container

* Jenkins stops any existing container
* Runs a new container from the latest image

Example command:

```bash
docker run -d -p 3000:3000 nodejs-jenkins-app
```

---

## 🌐 Step 6: Access the Application

Open browser and access:

```
http://<JENKINS-SERVER-IP>:3000
```

---

## 📊 Jenkins Pipeline Result

* All stages visible in Jenkins UI
* Green pipeline indicates successful build
* Logs available for each stage

---

## 🔁 CI/CD Flow Summary

* Code push triggers Jenkins automatically
* Jenkins executes Jenkinsfile
* Tests ensure code quality
* Docker ensures consistent deployment
* Application runs with zero manual steps

---

## 🧹 Cleanup (Optional)

```bash
docker stop <container-id>
docker rm <container-id>
docker rmi nodejs-jenkins-app
```

---

## 🎯 Key Learnings

* Implemented CI/CD using Jenkins
* Automated Docker image creation
* Integrated unit testing in pipeline
* Reduced manual deployment effort
* Followed DevOps best practices

---

⭐ If you found this project helpful, consider starring the repository!
