# Available Templates (branch-name)
- react to heroku deploy (react-heroku)
- next to heroku deploy (next-heroku)
- express serverless (express)
- python serverless (python)

# Express Install
sls create -u https://github.com/CodaBool/template/tree/express -n [FOLDER_NAME]

cd [FOLDER_NAME]

code . (edit app in serverless.yml)

create an .env file

npm i

sls deploy
