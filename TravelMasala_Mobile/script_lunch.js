var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/destinations/sia/appchallenge/api/meal/upliftplan",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "apikey": "aghk73f4x5haxeby7z24d2rc",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": "{ \"flightNo\": \"SQ32\", \"flightDate\": \"2018-07-20\" }"
}
$.ajax(settings).done(function (response) {});