function loadJS(files, done) {
    // Get the head tag
    const head = document. getElementsByTagName('head')[0];
    Promise.all(files.map(file => {
      return new Promise(resolve => {
        // create script tag and add to head
        const s = document.createElement('script');
        s.type = "text/javascript";
        s.async = true;
        s.src = file;
        // Listen to the load event, resolve if the loading is complete
        s. addEventListener('load', (e) => resolve(), false);
        head.appendChild(s);
      });
    })).then(done); // everything is done, execute the user's callback event
 }
 loadJS(["test1.js", "test2.js"], () => {
    // user's callback logic
 });There a