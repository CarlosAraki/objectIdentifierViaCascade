package com.apitg2.apitg2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import org.springframework.context.annotation.Bean;

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

}
