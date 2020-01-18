package com.apitg2.apitg2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;

import javax.persistence.Id;

@Entity
@Table(name="pictures_camera")
public class Pictures {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;
    @Column(name = "json")
    private String json;
    @Column(name = "date")
    private String date;
    @Column(name = "excluido")
    private String excluido;

    public  Pictures(){
    }
    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }
    public String getJsonPic(){
        return json;
    }
    public void setJsonPic(String jsonPic){
        this.json = jsonPic;
    }
    public String getDate(){
        return date;
    }
    public void setDate(String date){
        this.date = date;
    }
    public String getExcluido(){
        return excluido;
    }
    public void setExcluido(String excluido){
        this.excluido = excluido;
    }

    public void inicia(){
        System.load("C:/opencv/build/java/x64/opencv_java420.dll");
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        Mat mat = Mat.eye(3, 3, CvType.CV_8UC1);
        System.out.println("mat = " + mat.dump());
    }
}
