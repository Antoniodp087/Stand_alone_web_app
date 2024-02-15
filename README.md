# Stand_alone_web_app
A simple stand alone web app from the book: Essential TypeScript 4 by Adam Freeman


install required package\
npm install --save-dev webpack@5.90.1\
npm install --save-dev webpack-cli@5.1.4\
npm install --save-dev ts-loader@9.5.1\
npm install --save-dev webpack-dev-server@4.15.1\
npm install bootstrap@4.6.2\
npm install --save-dev css-loader@6.10.0\
npm install --save-dev style-loader@3.3.4\
npm install --save-dev json-server@0.17.4\
npm install --save-dev npm-run-all@4.1.5\
npm install --save-dev axios@1.6.7\
npm install --save-dev reflect-metadata@0.2.1\


script to add\
"json": "json-server data.js -p 4600",\
        "wds": "webpack-dev-server",\
        "start": "npm-run-all -p json wds"\


npm install --save-dev express@4.18.2
npx webpack --mode "production"
npx webpack
npx webpack-dev-server