pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                url: 'https://github.com/ajayicl2425-oss/frontend-backend-form.git'
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
