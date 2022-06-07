create database Login_Data;
use Login_Data;
create table usuarios (
idProfessor int primary key auto_increment,
user_name varchar(40) not null,
email varchar(50) not null,
senha varchar (20)not null,
data_user datetime default NOW()
);



create table Alunos (
matricula int primary key auto_increment,
nomeAluno varchar(50),
turmaAluno varchar(30),
data_aluno datetime default NOW()
);



insert into usuarios values (default,'usuario','usuario@gmail.com','senha123',NOW());
insert into alunos values('12345678','rafael','3 ano',NOW() );

select * from usuarios ;




