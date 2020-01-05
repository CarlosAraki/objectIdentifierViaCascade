package com.apitg2.apitg2.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.apitg2.apitg2.models.Logins;
import com.apitg2.apitg2.repository.LoginRepository;


@RestController
@RequestMapping(value = "/rest/logins")
public class LoginResources {

    @Autowired
    LoginRepository loginRepository;
    @GetMapping(value = "/all")
    public List <Logins> getAll(){
        return loginRepository.findAll();
    }

    @PostMapping(value="/load")
    public List <Logins> persist(@RequestBody final Logins login){
        loginRepository.save(login);
        return loginRepository.findAll();
    }
}
