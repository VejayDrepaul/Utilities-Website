import requests
from vlc import MediaPlayer

word = input('Enter the word: ')
api_url = f' https://api.dictionaryapi.dev/api/v2/entries/en/{word}'
word_data = requests.get(api_url).json()
a = word_data[0]
b = a['meanings']
c = b[0]
d = c['definitions']
e = d[0]
f = e['definition']
aa = word_data[0]
bb = aa['phonetics']
cc = bb[0]
file = f"https:{cc['audio']}"
print(f)
