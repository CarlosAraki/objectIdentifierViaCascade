package com.apitg2.apitg2.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.apitg2.apitg2.models.Pictures;
import com.apitg2.apitg2.repository.PictureRepository;

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
    @GetMapping(value = "/loadbyid")
    public Optional<Pictures> loadbyid(@RequestBody final int id) {
        return pictureRepository.findById(id);
    }


    @CrossOrigin
    @GetMapping(value = "/opencv")
    public List<Pictures> opencv() {
        Pictures pic = new Pictures();
        pic.inicia();
        return pictureRepository.findAll();
    }
}
