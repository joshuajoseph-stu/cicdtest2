pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                  bat 'pm2 start app.js'
            }
            
        }
    }
    post {
        success { 
            bat 'pm2 stop app.js'
        }
    }
}
