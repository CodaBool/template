# Available Templates (branch-name)
- react to heroku deploy (react-heroku)
- next to heroku deploy (next-heroku)
- express serverless (express)
- python serverless (python)

# Python Install
sls create -u https://github.com/CodaBool/sls-express-template/tree/python -n [FOLDER_NAME]

cd [FOLDER_NAME]

code . (edit service in serverless.yml)

sls deploy

# commands 
sls invoke local -f hello

sls invoke -f hello

sls create -t aws-python3 (shows good examples in its severless.yml file)

- not sure how to have pip library (yeah that's a big problem)
- this should be configured to run boto3 commands

# docs
https://www.serverless.com/framework/docs/
