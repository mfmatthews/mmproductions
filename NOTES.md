https://www.udemy.com/course/angular-material-course/learn/lecture/28526359#overview

#deploy to AWS S3 static web
(used this one) - set up S3, IAM user, configuring for static web....
https://medium.com/serverlessguru/deploying-angular-to-aws-in-seconds-or-10-minutes-941faa8c0aab
$(in root of app): ng build && npm run aws-deploy
(other one)
https://levelup.gitconnected.com/learn-how-to-create-and-deploy-the-angular-application-to-aws-serverless-s3-81f8a838b563
 #point domwin
 https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html


sudo kill `sudo lsof -t -i:4200`