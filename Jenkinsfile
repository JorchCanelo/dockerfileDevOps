pipeline {
  agent any
  stages {
    stage('Detener contenedores'){
      steps{
        sh 'sudo docker stop $(sudo docker ps -aq)'
      }
    }
    stage('Clonar repositorio') {
      steps {
        git branch: 'main', url: 'https://github.com/JorchCanelo/dockerfileDevOps.git'
      }
    }
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }
    stage('Ejecutar pruebas') {
      steps {
        sh 'npm test -- --forceExit' 
      }
    }
    stage('Construir y desplegar') {
      steps {
        sh "sudo docker build -t sicei-${env.BRANCH_NAME}:1.0.0-${env.BUILD_NUMBER} ."
        sh "sudo docker run -p 3000:8080 sicei-${env.BRANCH_NAME}:1.0.0-${env.BUILD_NUMBER}"
      }
    }
  }
}
