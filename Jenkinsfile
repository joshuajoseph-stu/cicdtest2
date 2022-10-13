pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                  bat 'pm2 stop app.js'
            }
            
        }
    }
}
