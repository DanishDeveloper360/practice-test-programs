let a = new Promise((res, rej) => res('Resolved!')),
    b = new Promise((res, rej) => rej('Rejected!'));
    // c = a.catch(e => { console.log('"a" failed.'); return e; }),
    // d = b.catch(e => { console.log('"b" failed.'); return e; });

// Promise.all([c, d])
//   .then((first, second) => console.log('Then', first, second)) // Then ["Resolved!", "Rejected!"]
//   .catch(err => console.log('Catch', err));

// Promise.all([a.catch(e => e), b.catch(e => e)])
//   .then((first, second) => console.log('Then', first, second)) // Then ["Resolved!", "Rejected!"]
//   .catch(err => console.log('Catch', err));

Promise.all([a,b])
  .then((res) => console.log(res)) // Then ["Resolved!", "Rejected!"]
  .catch(err => console.log('Catch', err));
  
