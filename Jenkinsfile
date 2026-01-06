pipeline {
    agent any

    stages {

        stage('Checkout') {
          steps {
            checkout scm
                }
           }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('app start') {
            steps {
                    sh 'npm start'
                }
            }
        }

        
}
