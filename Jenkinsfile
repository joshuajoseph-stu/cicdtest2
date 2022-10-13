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
}
