# RandomQuotes

This app display inspirational quote randomly. 

User can add thier own favorite quotes. 

This reposition is the frontend part of full stack MERN app that randomly display inspirational quotes. It is inspired from one of my Ruby on Rails project,[Splurty](https://github.com/zenkbaries/Splurty), that I had while I was in [Firehose Project](http://thefirehoseproject.com/).

The backend part is at [basic-mern-backend](https://github.com/zenkbaries/basic-mern-backend). This is where the quotes are stored using MongoDB.

It use [Auth0](https://auth0.com/) authentication service.

## Installation/Usage
------

clone this repository. Go into the cloned directory and install it:

```bash
cd <cloned directory>
npm install
npm start
```
(Instruction on how to configure to use API(backend) and Auth0 will be added here later.)

## Deploying

### Heroku
It needs buildpak, [mars/create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack). Read their `README.md`. It explain how to deploy to Heroku via CLI.
You can also configure to use this buildpack if you already deployed to Heroku. At Heroku on your app page, go to 'Setting' tab, then go to 'buildpack' section. Enter `mars/create-react-app-buildpack` and click Add Buildpack. Then you can redeploy for Heroku to use the newly installed buildpack.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

(will add the test if needed)

## License
[MIT](https://choosealicense.com/licenses/mit/)
