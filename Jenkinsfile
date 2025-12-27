pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/arunnishad1/jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-jenkins-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f nodejs-app || true
                docker run -d -p 3000:3000 --name nodejs-app nodejs-jenkins-app
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
