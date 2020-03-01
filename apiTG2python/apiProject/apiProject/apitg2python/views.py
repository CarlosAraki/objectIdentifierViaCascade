from django.shortcuts import render

from rest_framework import viewsets
from .models import Login
from .serializers import LoginSerializer
from rest_framework.views import APIView, Response

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import numpy as np
import urllib.request 
import json
import cv2
import os

# define the path to the face detector


class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer


class CustomView(APIView):
    FACE_DETECTOR_PATH = "{base_path}/cascades/haarcascade_frontalface_default.xml".format(
        base_path=os.path.abspath(os.path.dirname(__file__)))
    @csrf_exempt
    def post(self, request, format=None):
        data = {"success": 'Venha'}
        var = request.FILES.get("image", None) is not None
        if var:
            # grab the uploaded image
            image = _grab_image(stream=request.FILES["image"])
            # otherwise, assume that a URL was passed in
        return JsonResponse(data)

    def get(self,request):
        # initialize the data dictionary to be returned by the request
        data = {"success": 'Venha'}
        # check to see if this is a post request
        return JsonResponse(data)
           
   

@csrf_exempt   
def defineimage(request):
    data = {"success": 'Venha1'}
    FACE_DETECTOR_PATH = "{base_path}\cascades\haarcascade_frontalface_default.xml".format(
        base_path=os.path.abspath(os.path.dirname(__file__)))
    if request.method == 'GET':
        data = {"success": 'Venha2'}
    if request.method == 'POST':
        var = request.FILES.get("image", None) is not None
        if var:
            # grab the uploaded image
            image = _grab_image(stream=request.FILES["image"])
        else:
            url = json.loads(request.body.decode())
            image = _grab_image(url=url)
        # convert the image to grayscale, load the face cascade detector,
        # and detect faces in the image
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        detector = cv2.CascadeClassifier(FACE_DETECTOR_PATH)
        rects = detector.detectMultiScale(image, scaleFactor=1.1, minNeighbors=5,
            minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
        # construct a list of bounding boxes from the detection
        rects = [(int(x), int(y), int(x + w), int(y + h)) for (x, y, w, h) in rects]
        # update the data dictionary with the faces detected
        data.update({"num_faces": len(rects), "faces": rects, "success": True})
    return JsonResponse(data)


def _grab_image(path=None, stream=None, url=None):
    # if the path is not None, then load the image from disk
    if path is not None:
        image = cv2.imread(path)
    # otherwise, the image does not reside on disk
    else:	
        # if the URL is not None, then download the image
        if url is not None:
            url = url['url']
            if type(url) != type(""):  #Check if url is string or not
                print("Please give string url")
                return
            try:  
                resp = urllib.request.urlopen(url)
                print(resp)
                data = resp.read()
            except ValueError:
                print("badURL") 
        # if the stream is not None, then the image has been uploaded
        elif stream is not None:
            data = stream.read()
        # convert the image to a NumPy array and then read it into
        # OpenCV format
        image = np.asarray(bytearray(data), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    # return the image
    return image