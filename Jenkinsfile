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

    stage('build') {
      agent {
        node {
          label 'Checkout code'
        }

      }
      environment {
        build = 'build-test'
      }
      steps {
        sh ' sh \'docker build -f Dockerfile -t gabkings/video-api:latest .\''
      }
    }

  }
  environment {
    step = 'step-test'
  }
}