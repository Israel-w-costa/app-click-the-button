addEventListener("click", testAlert)

const colors = ["Yellow", "Purple","Orange","Pink","Brown","Black","Gray","Cyan","Magenta","Teal","Navy","Maroon","Beige","Lavender","Turquoise","Indigo","Violet",
   "Gold","Silver","Bronze","Coral"
]
const containerButton1 = document.getElementById("button1")
const containerButton2 = document.getElementById("button2")
let i = 0



function testAlert(e) {
   clickInButton1(e)
   clickInButton2(e)
}

function clickInButton1(e) {
   if (e.target.getAttribute('data-button') === "button1") {

      if (i => 0) {
         containerButton1.style.background = colors[i]
         i++
      }
      if (i > colors.length) {
         i = 0
         containerButton1.style.background = backgroundButton1
         containerButton1.style.color = letterButton
      }

   }
}

function clickInButton2(e) {
   if (e.target.getAttribute('data-button') === "button2") {

      if (i => 0) {
         containerButton2.style.background = colors[i]
         i++
      }
      if (i > colors.length) {
         i = 0
         document.getElementById("button2").style.background = backgroundButton2
         document.getElementById("button2").style.color = letterButton
      }

   }
}

const backgroundButton1 = "red"
const backgroundButton2 = "blue"
const letterButton = "white"

function button() {
   containerButton1.style.background = backgroundButton1
   containerButton1.style.color = letterButton
   containerButton2.style.background = backgroundButton2
   containerButton2.style.color = letterButton

}

button()




