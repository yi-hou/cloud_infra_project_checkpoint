# cloud_infra_project_checkpoint

## Steps that I will use to connect GCP:
  1. create a project on GCP
  2. Docker pull from my docker repository
  3. tag my image with Google
  4. Docker push image to the Google Container Registry
  5. Create a service 

## Build/run commands I used to run the client-side application:
  1. docker build -t honeymonkeyhy/project_check_point .
  2. docker push honeymonkeyhy/project_check_point
  3. docker run honeymonkeyhy/project_check_point
### Build/run commands I used to run on local:
  Build: npm run build
  Run: npm start
