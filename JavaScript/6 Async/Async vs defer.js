// by default <script src="">code</script> whenever js comes to this line js file is fetched from the network and then the file is executed then the other files get executed later(parsed the html file)
// <script src="" async >code</script> faster way it tells js to download and let the program parse as well then whenever js is downloaded it gets excuted then rest of program goes on
// <script src="" defer >code</script> it let html parse and download js file in background then when html is done parsing it executes js

// async doesn't guarantee the execution order of the scripts which can cause unexpected behaviour
// that's why defer is prefered and guarantee execution order
