# Requisitos Gerais
## Requisitos utilizados para app em ionic3

1. node.js v10.16.0
2. npm v6.9.0
3. ionic 5.4.13 --type ionic-angular
3. cordova v9.0.0 (cordova-lib@9.0.1)
4. @angular/http@7.2.15

## Requisitos do banco utilizado (MySql)

|Variable_name  |Value  |
|---------------|-------|
|innodb_version|	10.3.16|
|protocol_version|	10 |
|slave_type_conversions|	|
|system_versioning_alter_history|	ERROR|
|system_versioning_asof|	DEFAULT|
|version|	10.3.16-MariaDB|
|version_comment|	mariadb.org binary distribution|
|version_compile_machine|	x64|
|version_compile_os|	Win64|
|version_malloc_library|	system|
|version_source_revision|	*0789a1a18f0e780c0412667e7b6e0a9970aa6905|
|version_ssl_library|	YaSSL 2.4.4|

## Requisitos utilizados na API (JAVA)

1. java version "1.8.0_221" (Versão 8)
2. Java(TM) SE Runtime Environment (build 1.8.0_221-b11)
3. Java HotSpot(TM) 64-Bit Server VM (build 25.221-b11, mixed mode)
4. Springboot Framework 2.2.2
5. Gradle Project 
6. OpenCV 4.2.0

## Requisitos Computador Utilizado 

1. Sistema Operacional:Microsoft Windows 10 Home Single Language X64
2. Processador Intel COre i5-820U CPU 1.60GHz 1.80 GHz
3. Memória RAM 8 GB

## Requisitos do Celular Utilizado 

1. Modelo : Motorola One Vision XT1970-1 (SKU)
2. Android versão 10 (QSA30.62-24)
3. 4 GB RAM
4. 128 GB ROM
5. Display 2520x1080
6. Camera 48MP (1.6 micrometro quad pixel, 12MP output)+5MP 


# Planejamento do Projeto

## Implementações Básicas
[x] Criar/Configurar Banco MYSql local
[x] Criar/Configurar um app numa plataforma híbrida mínima funcional em IONIC3 
[x] Criar/Configurar uma API em JAVA com no mínimo uma requisição POST e um GET com o SpringBoot


## Implementações APP
[] Integrar o app com informações do Banco Local através da API em JAVA 
    *. []Implementar Tela de home como um CRUD básico para testar conexões Http/1.1 via POST e GET
    *. []Implementar Tela com botão para utilização mínima da camera 
    *. []Converter a imagem em datx64 e transformar informação em um JSON para API  

## Implementações API 
[] Configurar dependências OpenCV
[] Implementar Model para salvar imagem em um diretório local
[] Implementar Decode e Enconde da imagem em comunicação para o app


# Alterações de Base Path

1. providers
2. ionic config json 
