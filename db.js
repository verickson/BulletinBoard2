//database name
create database bulletinboard;

//table messages
create table messages(
  id serial primary key,
  title text,
  body text
);
