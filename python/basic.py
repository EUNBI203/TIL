import requests
key = 'bc1c4c6d69243c35c7f473852733fdab'
targetDt = '20190713' # yyyymmdd


api_url = f'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key={key}&targetDt={targetDt}'
print(api_url)
response = requests.get(api_url).json()
print(response)