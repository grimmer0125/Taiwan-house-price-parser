## Taiwan house data updater

### Local development

使用 `VS code` 選擇 debug config 同時build+debug. `local.js` 為進入點

### Deploy

AWS Lambda 支援線上edit及upload zip到 AWS S3 的方式deploy. 此處使用 Serverless framework 幫忙upload到S3 Deploy部份. 

1. Follow
https://www.twilio.com/blog/2017/09/serverless-deploy-nodejs-application-on-faas-without-pain.html 去設定 AWS CLI 及使用到的 `AWS Access Key ID` 及 `Secret Access Key`.  
2. 執行 `Serverless deploy` 去 deploy到 AWS Lambda. 

### AWS Lambda的額外所需設定
1. ~基本 config (Serverless會自動使用AWS CLI處理好)~. 
2. 使用AWS Console 調整其duration timeout時間 到 `300 seconds`. 
3. 使用cloudwatch去當成一個timer trigger (ref: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html). p.s. Firebase也有類似的功能


### References

1. Sererless+TypeScript設定部份是參考 https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/. 

