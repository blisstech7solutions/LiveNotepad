// Firebase config
let db;
$(document).ready(async function () {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBYV3M4Wo6bamjNTt5TK6LT_W8NR0ody48",
    authDomain: "fir-application-349d3.firebaseapp.com",
    projectId: "fir-application-349d3",
    storageBucket: "fir-application-349d3.firebasestorage.app",
    messagingSenderId: "1043229903116",
    appId: "1:1043229903116:web:66b0cb17998e5ac93e2129",
    measurementId: "G-S99CQ7QD3V"
  };
//   var firebaseConfig = {
//     apiKey: "AIzaSyC0pzJg49xgXbmPz6x2NM4lDk9S3FuvysA",
//     authDomain: "learning-79554.firebaseapp.com",
//     databaseURL: "https://learning-79554-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "learning-79554",
//     storageBucket: "learning-79554.appspot.com",
//     messagingSenderId: "511316342304",
//     appId: "1:511316342304:web:4d33f5ea21e1dd6e53ee45",
//     measurementId: "G-5PJ9BRFPTP"
// };
  // const firebaseConfig = {
  //   "type": "service_account",
  //   "project_id": "fir-application-349d3",
  //   "private_key_id": "1a6785b9a0a239cb4847ada87524a5bee526068f",
  //   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyM5EAXfSOG46I\nfsykg/LyHeplMSBfXzajPBmlNPdCT6anuEIASdOlVQfDGZP5XImrghkHJAbnyP9T\nZjk5SMcok/66eO5ts7DMvokmcCOOt8zYGN5NzG5PPfZkV0+YCUDL9q/N1sFHn560\nLWGOch/DNEMI8KgK2TiyRAkr218zo0NA2tLONOnY2jfiVj+jki+hhGN9rm6F6VLN\nXUmTpS+127oF8bJDuSHF4pYia98qtPFwvcnAjbsQPJVD9Zf/IQEuufx+5URq5xYf\ntOWV7rsK+5kcPhJP7qSOqjoNSzTtefgF9Hk5kYoZ7pFpWC8495VUEJhWVjwypUWx\nTKnzs5R3AgMBAAECggEAGebw7rK5d2Z+A00bBdbAG31Jsse/Qt2eHYAA4kieoB7f\nxIU94rjYcLG5XRx8q8RNpoZUiPstncdThZXYP4FaoYVRg11MmtmBm2Eeol2ubXI9\n7jM/LOPILPB+vfsK8Lh3mK4Uw8Cxe22yLdJi2cew4jjYfZYtdtY4LYFCLAPJBMI6\nEHE+hLx0jKvHywXYfEW4kg76pae3eLjVoZ+o0bs60tKzkPE8ebk/IC/p9hgWmEbF\nbX8jHiLol/ppUllt8xEv2nP7lFSUTLKby3JeLeNlbFWhDEa/EmHORKcSmcBckW+N\nqQk2XrHzAUhtauIh0k4Wu4366D44pp6EZi35xrQEIQKBgQDpWy4LMxl5JP8ASO7L\nwR7knWiVDXm5RMesoMGRZ+c4QCxyZdhUhevg97waosVYACAMe17wlaCy5wfDaAgy\n2MAGZqoMYmSI1tOmq4eRACupVT6u5es4+TEhc+39frUyVDy1llNNGk+qqTaCRYqu\ndE/ZQuJzLWH76EFWuzb6aLTP6QKBgQDDfkh19riCkfyHO008rr1VqfxmGNswHBdR\n8HvVzVwhiu2CU89Dil9shG8y8Gll/oaNPDHYU8X90U1LM2iF3m8XK3/yd8MYGPgs\nDYPERAXzIn6xFLykUDaWjHum5sKO8GopwAM5WLR4iMJp4mdq09CATy+VfI4bSiTc\nL0MaiUflXwKBgDLDvCuBjUwWaUb1lsVKmN7hA2xRhyZvuQRr4FAyi1FoXILydvJE\nRAEnw4sD1+yB8nbkq82or1HcAotW6VmuX2/FC78v9HD0UwzSCebYY6ctvTotGFPH\nmhGN97sKwn5VZvOV5T9DtwsITqxeVoIHGYvJChxGRieX6gblKVumRZdpAoGAYXMo\n8czMCyJ0rICuLsq4TOSQkeBgGupV4Z2sTVayT3IulSHsFrH6gWC/AbiAAbzQG8Ve\n34RbFPxpuEvnFZxc6kLf4+E5WmDQDT2raoGyKZIPb3xz0MC/hWqAFSHA6HoFocw6\njzKdu9wIdbnLbaAqtltC0BSnzgi2uR/CJo86TKcCgYEAjyIdyVMXGC2io3qEHc1+\nYESXGwQzmbyUXSoRjc6t3lLC06K2cHrwxuWqBaY5djZ3eDNZklTzw9h0dkur2QK6\nweUFgLCGy3HY9OcjYYnyemlg74O/O2aPl6W/08Sn2pAxkcd4GWDjpdIML8emta0c\nrG21dKykDhDp6jxJMjwPnzc=\n-----END PRIVATE KEY-----\n",
  //   "client_email": "firebase-adminsdk-j5c4d@fir-application-349d3.iam.gserviceaccount.com",
  //   "client_id": "116560086555357849526",
  //   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //   "token_uri": "https://oauth2.googleapis.com/token",
  //   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j5c4d%40fir-application-349d3.iam.gserviceaccount.com",
  //   "universe_domain": "googleapis.com"
  // }
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword("firebase-adminsdk-j5c4d@fir-application-349d3.iam.gserviceaccount.com")
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //   db = firebase.firestore();
     
  //   })
  //   .catch((error) => {
  //     console.error("Authentication Error:", error);
  //     if (error.code === "auth/invalid-email") {
  //       alert("Invalid email address.");
  //     } else if (error.code === "auth/wrong-password") {
  //       alert("Incorrect password.");
  //     } else {
  //       alert("Authentication failed. Please try again later.");
  //     }
  //   });
    setTimeout(function() {  getDataAndSetHTML(fbDocName) }, 2000);
    
  });
const shareButton = document.getElementById('Share-Code');
  
$("#Share-Code").click(function(){
  const timestamp = getFormattedDate();
  $("#Share-Code").hide()
    $(".Editor-container").show()
    window.location.href = `/ShareCode.html?id=${timestamp}`;
    db.collection("IKSDEV_NotePad_Share").doc(timestamp).set({
      content: "",
      timestamp: timestamp
    })
   });
   
function getFormattedDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
const urlParams = new URLSearchParams(window.location.search);
const fbDocName = urlParams.get('id');
// Function to save content to Firestore
function saveContentToFirestore() {
  const content =$('.input-field').html()
  db.collection("IKSDEV_NotePad_Share").doc(fbDocName).set({
    content: content,
    timestamp: new Date() 
  })
  .then(() => {
  Swal.fire({
  title: "Success!",
  text: "Content saved successfully!",
  icon: "success",
  confirmButtonText: "OK",
  timer: 3000, // Duration in milliseconds
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading(); // optional, shows a spinner while counting down
  }
});

  })
  .catch((error) => {
    console.error("Error saving content: ", error);
  });
}
// Function to get the content from Firestore


async function getDataAndSetHTML(fbDocName) {
  const docRef = db.collection("IKSDEV_NotePad_Share").doc(fbDocName);

  try {
    // Using .onSnapshot to listen for real-time updates
    docRef.onSnapshot((doc) => {
      if (doc.exists) {
        // Get the content from Firestore document
        const content = doc.data().content;
        let div = document.querySelector('.input-field');
        div.innerHTML = content;
        // You can also use value if the input is a text area or similar
        // document.querySelector('.input-field').value = content;
      } else {
        console.log("No such document!");
      }
    });
  } catch (error) {
    console.error("Error getting document:", error);
  }
}
// Function to copy plain text
function copyText() {
  const text = document.querySelector('.input-field').innerText;
  navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
  }).catch(err => {
      console.error("Error copying text: ", err);
  });
}

// Function to copy HTML content
function copyHTML() {
  const htmlContent = document.querySelector('.input-field').innerHTML;
  navigator.clipboard.writeText(htmlContent).then(() => {
      alert("HTML copied to clipboard!");
  }).catch(err => {
      console.error("Error copying HTML: ", err);
  });
}

// Show the modal when copy URL button is clicked
$('#copy-url').click(function() {
  var textField = document.createElement('textarea');
  textField.textContent = window.location.href; // Get current URL
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  document.body.removeChild(textField);
  
  // Show the modal
  $('#share-modal').fadeIn();

  // Enable the Share Email and WhatsApp buttons
  $('#share-email').prop('disabled', false);
  $('#share-whatsapp').prop('disabled', false);
});

// Close the modal when clicking on the close button
$('#close-modal').click(function() {
  $('#share-modal').fadeOut();
});

// Optional: Close the modal when clicking outside the modal
$(window).click(function(event) {
  if ($(event.target).is('#share-modal')) {
    $('#share-modal').fadeOut();
  }
});

$('#share-email').click(function() {
  var subject = "Check this out!";
  var body = "I found this amazing content, take a look!";
  var email = "someone@example.com"; // Default email if you want to prefill
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
$('#share-whatsapp').click(function() {
  var message = "Check this out! I found this amazing content.";
  var url = encodeURIComponent(window.location.href); // Get the current page URL
  var whatsappLink = `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`;
  window.open(whatsappLink, '_blank');
});

document.getElementById("download-btn").addEventListener("click", function() {
  // Get the content of the editable div
  var content = document.querySelector(".input-field").innerText;

  // Create a Blob with the content and specify MIME type for plain text
  var blob = new Blob([content], { type: "text/plain" });

  // Create an anchor element to trigger the download
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "text-file.txt";  // Filename for the downloaded file

  // Programmatically click the link to start the download
  link.click();
});
