pipeline {
  agent {
    node {
      label 'Checkout Code'
    }

  }
  stages {
    stage('error') {
      steps {
        git(url: 'https://github.com/Gabkings/video-sharing-app-backend', branch: 'main')
      }
    }

  }
  environment {
    step = 'step-test'
  }
}