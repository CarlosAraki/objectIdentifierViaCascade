create database if  not exists 
    tg2_database;

USE tg2_database;
SHOW VARIABLES LIKE "%version%";
create table if not exists credential_login(
    id bigint(20) NOT NULL AUTO_INCREMENT,
    login text DEFAULT NULL COMMENT 'login ',
    senha text  DEFAULT NULL COMMENT 'senha',
    excluido varchar(3) DEFAULT 'nao',
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table if not exists pictures_camera(
    id bigint(20) NOT NULL AUTO_INCREMENT,
    json text DEFAULT NULL COMMENT 'json da camera',
    date text  DEFAULT NULL COMMENT 'data da foto',
    excluido varchar(3) DEFAULT 'nao',
    PRIMARY KEY(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `pictures_camera` CHANGE `json` `json` LONGTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'json da camera';
