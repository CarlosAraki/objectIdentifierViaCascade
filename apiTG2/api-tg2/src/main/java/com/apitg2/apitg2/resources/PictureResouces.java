package com.apitg2.apitg2.resources;

import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.xml.bind.DatatypeConverter;
import java.io.*;

import com.apitg2.apitg2.models.Pictures;
import com.apitg2.apitg2.repository.PictureRepository;

import nu.pattern.OpenCV;

@RestController
@RequestMapping(value = "/rest/pictures")
public class PictureResouces {

    @Autowired
    PictureRepository pictureRepository;

    @CrossOrigin
    @GetMapping(value = "/all")
    public List<Pictures> getAll() {
       final List<Pictures> pictures = pictureRepository.findAll();
        final List<Pictures> pictures_not_exclude = new ArrayList<Pictures>();
        for (final Pictures picture : pictures) {
            if (picture.getExcluido().toString().equals("nao")) {
                pictures_not_exclude.add(picture);
            }
        }
        return pictures_not_exclude;
    }

    @CrossOrigin
    @PostMapping(value = "/load")
    public Pictures persist(@RequestBody final Pictures picture) {
        Pictures pic  = pictureRepository.save(picture);
        String base64String = pic.getJsonPic();
        String[] strings = base64String.split(",");
        String extension;
        switch (strings[0]) {//check image's extension
            case "data:image/jpeg;base64":
                extension = ".jpeg";
                break;
            case "data:image/png;base64":
                extension = ".png";
                break;
            default://should write cases for more images types
                extension = ".jpg";
                break;
        }
        //convert base64 string to binary data
        byte[] data = DatatypeConverter.parseBase64Binary(strings[1]);
        String path = "C:\\xampp\\htdocs\\TG2\\servidor\\"+pic.getId() + extension;
        File file = new File(path);
        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
            outputStream.write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
        picture.setExcluido("nao");
        return pictureRepository.save(picture);
    }

    @CrossOrigin
    @PostMapping(value = "/exclude")
    public List<Pictures> exclude(@RequestBody final Pictures picture) {
        final int id = picture.getId();
        final Optional<Pictures> data = pictureRepository.findById(id);
        picture.setJsonPic(data.get().getJsonPic());
        picture.setDate(data.get().getDate());
        picture.setExcluido("sim");
        pictureRepository.save(picture);
        return this.getAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/loadbyid/{id}")
    public Optional<Pictures> loadbyid(@PathVariable Integer id) {
     
        return pictureRepository.findById(id);
    }


   
    @CrossOrigin
    @GetMapping(value = "/inicio")
    public void loadOpenCV_Lib() throws Exception {

    	//System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
    	
    	 System.out.println("ok1");
        // System.load("C:/opencv342/opencv/build/java/x64/opencv_java342.dll");
        // System.out.println(Core.NATIVE_LIBRARY_NAME);
        // Mat mat = Mat.eye(3, 3, CvType.CV_8UC1);
        // System.out.println("mat = " + mat.dump());
        String path = "C:/xampp/htdocs/TG2/servidor/57.png";
        System.out.println("ok");
        Imgcodecs imageCodecs = new Imgcodecs();
        System.out.println("ok");
     
        Mat matrix = Imgcodecs.imread(path);
        System.out.println("mat = " + matrix.dump());
        System.out.println("ok");
        }



}
