create database if  not exists 
    tg2_database;

USE tg2_database;

create table if not exists credential_login{
    id bigint(20) AUTO_INCREMENT,
    login text,
    senha text,
    PRIMARY KEY(id)
}


