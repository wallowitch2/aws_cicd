pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build' // 빌드 스크립트가 package.json에 정의되어 있는 경우
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
