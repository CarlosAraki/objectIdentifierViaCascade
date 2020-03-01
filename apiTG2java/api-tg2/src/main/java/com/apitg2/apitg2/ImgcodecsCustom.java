package com.apitg2.apitg2;


import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.sun.jna.Library;
import com.sun.jna.Native;





public class ImgcodecsCustom  {

	
	
	public interface OPENCV extends Library {
		long imread_1(String filename);
	}
	
	private OPENCV openCV;
	
	public ImgcodecsCustom() {

		if (this.openCV==null) {

			
		    try {
		    	System.setProperty("java.library.path", "C:\\xampp\\htdocs\\TG2\\apiTG2\\api-tg2\\libs\\x64");
		        //System.load("C:\\xampp\\htdocs\\TG2\\apiTG2\\api-tg2\\libs\\x64\\opencv_java342.dll");
		    	this.openCV = (OPENCV)Native.loadLibrary("C:\\xampp\\htdocs\\TG2\\apiTG2\\api-tg2\\libs\\x64\\opencv_java342.dll", 
		    			(Class)ImgcodecsCustom.class);
		    	
		        System.out.println("DLL OK1");

		        
		    } catch (UnsatisfiedLinkError e) {
		      System.err.println("Native code library failed to load.\n" + e);
		      System.exit(1);
		    } 				
			
		}
		
		
	}
	
	
    //javadoc: imread(filename)
    public Mat imread1(String filename)
    {
        
        Mat retVal = new Mat(openCV.imread_1(filename));
        
        return retVal;
    }
    

	
	
}
