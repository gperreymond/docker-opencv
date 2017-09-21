#!/usr/bin/python3

from optparse import OptionParser

import sys
import numpy as np
import cv2

parser = OptionParser()
parser.add_option("-f", "--file", dest="fsource", help ="image to compute")
parser.add_option("-o", "--out", dest="ftarget", help ="image's name after the compute")
(options, args) = parser.parse_args()

fsource = options.fsource
ftarget = options.ftarget

try:
    # load the image and convert it to grayscale
    im = cv2.imread(fsource)
    imgray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    # initialize the AKAZE descriptor, then detect keypoints and extract
    # local invariant descriptors from the image
    detector = cv2.AKAZE_create()
    (kps, descs) = detector.detectAndCompute(imgray, None)
    cv2.imwrite(ftarget, descs)
except:
    print("Unexpected error:", sys.exc_info()[0])
    sys.exit()
