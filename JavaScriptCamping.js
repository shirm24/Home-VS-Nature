function PinkSuitCase() { /*(בלחיצה על כפתור הרדיו, המזוודה הורודה תהיה בשקיפות מלאה(לאחר הוגדרה בשקיפות 0*/
    document.getElementById("SuitCasePink").style.opacity = 1;
}

function BlueSuitCase() { /*לעומת זאת, כאן חייב להיות שבלחיצה על הכפתור המזוודה הורודה תחזור למצב ההתחלתי*/
    document.getElementById("SuitCasePink").style.opacity = 0;
}

function imgCheckboxVisibility(checkboxId, elementId) { /*בלחיצה על אחד מכפתורי הצ'ק בוקס, במידה והתיבה מסומנת התמונה תתגלה וישמע צליל ובמיה והיא לא מסומנת יקרה ההפך*/
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        document.getElementById(elementId).style.opacity = 1;
    } else {
        document.getElementById(elementId).style.opacity = 0;
    }
    var audioPlayer = document.getElementById('puttingdownsomething');
    audioPlayer.play();
}

function catVisibility() { /*מאחר ובלחיצה על הכפתור המקושר לתמונת החתול קיים צליל אחר, קיימת פונקציה נפרדת*/
    var checkbox = document.getElementById("catCheckbox");
    if (checkbox.checked) {
        document.getElementById("cat").style.opacity = 1;
    } else {
        document.getElementById("cat").style.opacity = 0;
    }
    var audioPlayer = document.getElementById('meow');
    audioPlayer.play();
}

function checkFormCompletion() { /*במילוי כל פקדי הטופס, ובתנאי שמולאו כל התנאים בהתאם לתנאי שהוגדר, הכפתור יהיה פעיל ויחזור לשקיפות 100%. במידה וזה לא כך, הכפתור ישאר במצב התחלתי*/
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var destination = document.getElementById("destination").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;
    var submitButton = document.querySelector(".submit-button");

    if (checkboxes >= 2 && destination && departureDate && returnDate) {
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    } else {
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
    }
}

function showTravelDetails() { /*לאחר הפעלת הכפתור ולחיצה עליו, כל הפרטים יוכנסו לאזור בו יפורטו למשתמש מתחת לטופס*/
    var suitcaseColor = document.querySelector('input[name="suitcaseColor"]:checked').value;
    var items = document.querySelectorAll('input[name="items"]:checked');
    var itemsList = '';
    var destination = document.getElementById('destination').value;
    var departureDate = document.getElementById('departureDate').value;
    var returnDate = document.getElementById('returnDate').value;

    for (var i = 0; i < items.length; i++) {
        itemsList += items[i].value;
        if (i < items.length - 1) {
            itemsList += ', ';
        }
    }
    var summary = document.getElementById('summary').innerHTML =
        '<h2>סיכום הנסיעה</h2>' +
        '<p>בחרת במזוודה ' + suitcaseColor +
        ' עם הפריטים הבאים: ' + itemsList + '</p>' +
        '<p>היעד הוא: ' + destination + '</p>' +
        '<p>תאריך יציאה: ' + departureDate + '</p>' +
        '<p>תאריך חזרה: ' + returnDate + '</p>';
}