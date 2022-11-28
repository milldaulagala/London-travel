pipeline {
    agent {
        docker {
            image 'node:carbon'
            args '-u 0:0'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}