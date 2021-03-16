export const questions = [
  [
    {"id": "age", "label": "what is age?", "type": "input", "max": 100, "min": 18, "showfor": "all"},
    {"id": "height", "label": "", "type": "input", "max": 200, "min": 20, "showfor": "all"},
    {"id": "weight", "label": "", "type": "input", "max": 200, "min": 20, "showfor": "all"},
    {"id": "gender", "label": "gender ?", "type": "select", "selectors": ["male", "female"], "showfor": "all"},
    {"id": "pregnant", "label": "pregnant ?", "type": "select", "selectors": ["Yes", "No"], "showfor": "female"},
    {"id": "contraceptives", "label": "contraceptives ?", "type": "select", "selectors": ["Yes", "No"], "showfor": "pregnant"},
  ],
  [
    {"id": "no deit", "label": "no \n description", "type": "checkbox", "disbleOther": true},
    {"id": "keto", "label": "keto \n description", "type": "checkbox", "disbleOther": false},
    {"id": "fasting", "label": "fasting \n description", "type": "checkbox", "disbleOther": false},
    {"id": "restictive", "label": "restictive \n description", "type": "checkbox", "disbleOther": false},
    {"id": "consulted", "label": "consulted \n description", "type": "checkbox", "disbleOther": false},
    {"id": "others", "label": "others \n description", "type": "checkbox", "disbleOther": false}
  ],
  [
    {"id": "work", "label": "DO YOU WORK SITTING DOWN?", "type": "select", "showfor": "all", "selectors": ["Yes", "No"]},
    {"id": "start", "label": "when starts?", "type": "select", "showfor": "all", "selectors": ["6 AM", "7 am", "8 am"]},
    {"id": "ends", "label": "when ends", "type": "select", "showfor": "all", "selectors": ["6 AM", "7 am", "8 am"]},
    {"id":"stress Level", "label": "stress level", "type": "slider", "showfor": "all", "min": 0, "max": 10,},
    {"id": "bed time", "label": "bed time?", "type": "select", "showfor": "all", "selectors": ["6 AM", "7 am", "8 am"]},
    {"id":"sleep", "label": "Sleep", "type": "slider", "showfor": "all", "min": 0, "max": 10 },
    {"id":"sleep quality", "label": "sleep quality", "type": "slider", "showfor": "all", "min": 0, "max": 10 }
  ],
  [
    {"id": "smoke", "label": "do you?", "type": "select", "showfor": "all", "selectors": ["No", "Yes", "Used to"]},
    {"id": "count", "label": "how many", "type": "slider", "show for": "smokes", "min": "1 or less", "max": "20 or more"},
    {
      "id": "when", 
      "label": "when did you quit", 
      "type": "select", 
      "showfor": "used to smoke", 
      "selectors": ["More than a year", "Less than a year", "less than a month", "today"]
    }
  ]
]