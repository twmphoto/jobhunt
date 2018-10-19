DROP DATABASE job_hunt;
CREATE DATABASE job_hunt;
\c job_hunt;

CREATE TABLE StatusTypes (
  statustype_id   SERIAL PRIMARY KEY,
  type            VARCHAR(50)
);

INSERT INTO StatusTypes(type)
VALUES
('Phone Interview'),
('In-Person Interview'),
('2nd In-Person'),
('3rd In Person'),
('Offer');



CREATE TABLE Jobs (
  job_id                 SERIAL PRIMARY KEY,
  date_added             TIMESTAMP, 
  status                 INTEGER REFERENCES StatusTypes (statustype_id),
  company_name           VARCHAR(50),
  link_to_job_post       VARCHAR(255)
);


CREATE TABLE Users (
  user_id         SERIAL PRIMARY KEY,
  name            VARCHAR(50),
  email           VARCHAR(50),
  password        VARCHAR(50),
  jobs_list       INTEGER REFERENCES Jobs (job_id)
);


INSERT INTO Users(name, email, password)
VALUES
('test', 'email', 'password', );






































