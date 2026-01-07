pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                 sh 'pwd: ${pwd()}'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'pwd: ${pwd()}'
                    sh 'npm install'
                }
            }
        }

        stage('App Start') {
            steps {
                dir('frontend') {
                    sh 'npm start'
                }
            }
        }
    }
}
