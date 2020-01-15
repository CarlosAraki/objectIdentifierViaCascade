package com.apitg2.apitg2.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.apitg2.apitg2.models.Logins;
import com.apitg2.apitg2.repository.LoginRepository;

@RestController
@RequestMapping(value = "/rest/logins")
public class LoginResources {

    @Autowired
    LoginRepository loginRepository;

    @GetMapping(value = "/all")
    public List<Logins> getAll() {
        List <Logins> logins = loginRepository.findAll();
        List <Logins> logins_sem_excluido = new ArrayList<Logins>();
        for( Logins login : logins) {
            if(login.getExcluido().toString().equals("nao")){
                logins_sem_excluido.add(login);
            }
        }
        return logins_sem_excluido;
    }

    @PostMapping(value = "/load")
    public List<Logins> persist(@RequestBody final Logins login) {
        login.setExcluido("nao");
        loginRepository.save(login);
        return this.getAll();
    }

    @PostMapping(value = "/exclude")
    public List<Logins> exclude(@RequestBody final Logins login) {
        int id = login.getId();
        Optional<Logins> data = loginRepository.findById(id);
        login.setLogin(data.get().getlogin());
        login.setSenha(data.get().getSenha());
        login.setExcluido("sim");
        loginRepository.save(login);
        return this.getAll();
    }
}
