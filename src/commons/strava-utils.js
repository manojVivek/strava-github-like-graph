import Strava from 'strava-v3';

let _athlete = null;
let userClient = null;
let graphData = null;

Strava.config({
  client_id: process.env.REACT_APP_STRAVA_CLIENT_ID,
  client_secret: process.env.REACT_APP_STRAVA_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_STRAVA_REDIRECT_URI,
});

function initializeUserClient(access_token) {
  userClient = new Strava.client(access_token);
}

export function getRequestAccessURL() {
  return Strava.oauth.getRequestAccessURL({scope: 'activity:read'});
}

export function getAthlete() {
  return _athlete;
}

export async function completeAuthentication(code) {
  console.log('code:', code);
  const {access_token, athlete} = await Strava.oauth.getToken(code);
  console.log('access_token, athlete', access_token, athlete);
  _athlete = athlete;
  initializeUserClient(access_token);
}

export async function processActivitiesData() {
  const per_page = 50;
  const before = Math.floor(new Date().getTime() / 1000);
  const after =
    before - 60 /*secs*/ * 60 /*mins*/ * 24 /* hours*/ * 365; /*days*/
  let page = 1;
  let currentBatch = [];
  let allActivities = [];
  do {
    currentBatch = await userClient.athlete.listActivities({
      before,
      after,
      page,
      per_page,
    });
    allActivities = [...allActivities, ...currentBatch];
    page++;
  } while (currentBatch.length === per_page);
  graphData = computeGraphData(allActivities, before, after);
}

export function getGraphData() {
  return graphData;
}

function computeGraphData(allActivities, before, after) {
  const dayWiseData = initializeEmptyDataSctructure(before, after);
  allActivities.forEach(activity => {
    const dataObj = dayWiseData[activity.start_date_local.split('T')[0]];
    if (!dataObj.activities) {
      dataObj.activities = [];
      dataObj.effortLevel = 0;
    }
    dataObj.activities.push(activity);
    dataObj.effortLevel += getEffortLevel(activity);
  });
  return dayWiseData;
}

function getEffortLevel(activity) {
  const distanceTolerance = 300;
  switch (activity.type) {
    case 'Run':
      return distanceBasedEffort(activity.distance, 5000, distanceTolerance);
    case 'Ride':
      return distanceBasedEffort(activity.distance, 10000, distanceTolerance);
    case 'Walk':
      return distanceBasedEffort(activity.distance, 7500, distanceTolerance);
    default:
      return 0;
  }
}

function distanceBasedEffort(distance, slabDistance, tolerance) {
  if (distance === 0) {
    return 0;
  }
  if (distance < slabDistance - tolerance) {
    return 1;
  }
  return Math.floor((distance + tolerance) / slabDistance + 1);
}

function initializeEmptyDataSctructure(before, after) {
  const today = new Date(before * 1000);
  today.setMilliseconds(0);
  today.setSeconds(0);
  today.setMinutes(0);
  today.setHours(0);
  const dayWiseData = {};
  for (; today.getTime() / 1000 > after; today.setDate(today.getDate() - 1)) {
    dayWiseData[today.toLocaleString('sv').split(' ')[0]] = {};
  }
  return dayWiseData;
}
