package com.apitg2.apitg2;

import java.util.TimeZone;

import javax.annotation.PostConstruct;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import nu.pattern.OpenCV;

@EnableJpaRepositories(basePackages = "com.apitg2.apitg2.repository")
@SpringBootApplication
public class ApiTg2Application {
	@PostConstruct
	void started() {
	TimeZone.setDefault(TimeZone.getTimeZone("TimeZone"));
	}
	public static void main(String[] args) {
		SpringApplication.run(ApiTg2Application.class, args);
	}
	
	
	@Bean 
	void load() {
    	OpenCV.loadShared();    			
	}
}
