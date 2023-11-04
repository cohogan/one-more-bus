const minLat = 41.0;
const maxLat = 55.5;
const minLong = 46.0;
const maxLong = 87.5;
const step = 0.5;

const latitudes = [];
for (let lat = minLat; lat <= maxLat; lat += step) {
  latitudes.push(lat);
}

const longitudes = [];
for (let long = minLong; long <= maxLong; long += step) {
  longitudes.push(long);
}

const points = [];
for (let i = 0; i < latitudes.length; i++) {
  for (let j = 0; j < longitudes.length; j++) {
    points.push([latitudes[i], longitudes[j]]);
  }
}

console.log(points);


