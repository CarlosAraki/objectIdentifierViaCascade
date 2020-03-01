import requests
import cv2
import json
# define the URL to our face detection API
url = "http://localhost:8080/api/define/"
# use our face detection API to find faces in images via image URL
# image = cv2.imread("../../servidor/obama.jpg")
# payload = {"url": "https://pyimagesearch.com/wp-content/uploads/2015/05/obama.jpg"}
# var = requests.get(url);
# print(var) 
# r = requests.post(url, data=json.dumps(payload)).json()
# # loop over the faces and draw them on the image
# for (startX, startY, endX, endY) in r["faces"]:
# 	cv2.rectangle(image, (startX, startY), (endX, endY), (0, 255, 0), 2)
# # show the output image
# cap = cv2.VideoCapture(1) 
# cv2.imshow("obama.jpg", image)
# cv2.waitKey(0)


image = cv2.imread("../../servidor/54.jpeg")
payload = {"image": open("../../servidor/54.jpeg", "rb")}
r = requests.post(url, files=payload).json()
# loop over the faces and draw them on the image
for (startX, startY, endX, endY) in r["faces"]:
	cv2.rectangle(image, (startX, startY), (endX, endY), (0, 255, 0), 2)
# show the output image
cap = cv2.VideoCapture(1) 
cv2.imshow("54.jpeg", image)
cv2.waitKey(0)