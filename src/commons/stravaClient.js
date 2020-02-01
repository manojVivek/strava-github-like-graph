import Strava from 'strava-v3';

let _athlete = null;
let userClient = null;

Strava.config({
  "client_id"     : process.env.REACT_APP_STRAVA_CLIENT_ID,
  "client_secret" : process.env.REACT_APP_STRAVA_CLIENT_SECRET,
  "redirect_uri"  : process.env.REACT_APP_STRAVA_REDIRECT_URI,
});

function initializeUserClient(access_token) {
  userClient = new Strava.client(access_token);
}


export function getRequestAccessURL() {
  return Strava.oauth.getRequestAccessURL({scope:"activity:read"});
}

export function getAthlete() {
  return _athlete;
}

export async function completeAuthentication(code) {
  console.log('code:', code);
  const {access_token, athlete } = await Strava.oauth.getToken(code);
  console.log('access_token, athlete', access_token, athlete);
  _athlete = athlete;
  initializeUserClient(access_token);
  const response = await userClient.athlete.listActivities({});
  console.log('response', response);
}



