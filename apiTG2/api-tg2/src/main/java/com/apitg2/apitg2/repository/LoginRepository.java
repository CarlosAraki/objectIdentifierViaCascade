package com.apitg2.apitg2.repository;

import com.apitg2.apitg2.models.Logins;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Logins,Integer> {

}
