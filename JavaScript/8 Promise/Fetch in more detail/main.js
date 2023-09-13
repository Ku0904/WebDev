// The promise returned from fetch() won't reject on HTTP errors even if the response is an HTTP 404 or 500.
// Instead, as soon as the server responds with headers, the promise will resolve (with the ok property of the response set to false if the response isn't in the range 200–299).
// The promise will only reject on network failure or if anything prevented the request from completing.

// https://developer.mozilla.org/en-US/docs/Web/API/fetch
