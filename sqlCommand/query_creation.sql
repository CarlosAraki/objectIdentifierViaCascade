create database if  not exists 
    tg2_database;

USE tg2_database;

create table credential_login(
    id bigint(20) NOT NULL AUTO_INCREMENT,
    login text DEFAULT NULL COMMENT 'login ',
    senha text  DEFAULT NULL COMMENT 'senha',
    excluido varchar(3) DEFAULT 'nao',
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


