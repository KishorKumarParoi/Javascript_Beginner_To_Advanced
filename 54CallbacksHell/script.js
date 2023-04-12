let first = document.getElementById('first')
console.log(first)
first.innerHTML = "Kishor is Learning Callbacks"

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = function() {
    console.log("Loaded with SRC : " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Loaded with Error of SRC : " + src)
    callback(new Error("Error is happening"))
  }
  document.body.appendChild(script)
}

function hello(error, src) {
  if (error) {
    console.log("Error Happened")
    sendEmergencyMessageToCeo();
    return;
  }
  alert("Hello World from SRC : " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
  if (error) {
    console.log("Error Happened")
    sendEmergencyMessageToCeo();
    return;
  } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
    if (error) {
      console.log("Error Happened")
      sendEmergencyMessageToCeo();
      return;
    } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
      if (error) {
        console.log("Error Happened")
        sendEmergencyMessageToCeo();
        return;
      } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
        if (error) {
          console.log("Error Happened")
          sendEmergencyMessageToCeo();
          return;
        } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
          if (error) {
            console.log("Error Happened")
            sendEmergencyMessageToCeo();
            return;
          } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
            if (error) {
              console.log("Error Happened")
              sendEmergencyMessageToCeo();
              return;
            } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
              if (error) {
                console.log("Error Happened")
                sendEmergencyMessageToCeo();
                return;
              } loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
                if (error) {
                  console.log("Error Happened")
                  sendEmergencyMessageToCeo();
                  return;
                }
                alert("Hello World from SRC : " + src)
              })
            })
              loadScript("https://cdn.jsdelivrq.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)

              loadScript("https://cdn.jsdelivrq.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)

              loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", hello)

// Chintu
// inversion of control
// pyramid of doom
// callback hell
