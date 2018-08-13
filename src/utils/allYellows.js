const yellows = [
  "Mellow #F8DE7E",
  "Royal #FADA5E",
  "Gold #F9A602",
  "Cyber #FFD300",
  "Trombone #D2B55B",
  "Khaki #C3B091",
  "Goldenrod #DAA520",
  "Banana #FCF4A3",
  "Tuscany #FCD12A",
  "Honey #FFC30B",
  "Dijon #C49102",
  "Bumblebee #FCE205",
  "Fire #FDA50F",
  "Ochre #CC7722",
  "Amber #FFBF00",
  "Flax #EEDC82",
  "Cream #FFFDD0",
  "Beige #F5F5DC",
  "Peach #FFE5B4",
  "Lemon #EFFD5F",
  "Laguna #F8E473",
  "Mustard #FEDC56",
  "Navajo #FFDDAF",
  "Ecru #CEB180",
  "Pure yellow"
]

const allYellows = yellows.map(pair => ({name: pair.split(" ")[0], hex: pair.split(" ")[1]}))
export default allYellows