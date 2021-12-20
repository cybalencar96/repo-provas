<br />
<p align="center">
  <a href="/">
    <img src="https://github.com/cybalencar96/repo-provas-front/blob/main/public/logo.svg?raw=true" alt="Logo" width="90px" height="auto">
  </a>

<h3 align="center">RepoProvas</h3>

  <p align="center">
    A repository to store old (<strong>but gold</strong>) school exams
    <br />
    <a href="https://github.com/cybalencar96/repo-provas-back"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://repo-provas-front-cybalencar96.vercel.app/">View Demo</a>
    <br />
  </p>
</p>

#

### **About the project**

<br />
<p align="center">
<img src="https://github.com/cybalencar96/repo-provas-front/blob/main/public/preview.gif?raw=true" width="600px">
<p>

<br />


You are an in progress graduation student. You're in the fifth period and you're disgusted with one thing: the teachers don't release the old exams for you to study. That's because they reuse the same proofs, slightly adapted, so they don't have to work to produce new proofs.

This might even be good for them, but the students end up not having material to train and feel safe for the tests.

However, as a solution solver, you decide to handle this problem: you want to make a platform for people to share (anonymously) the old and on going exams for posteriority.

<br />

### **Built with**

- [React JS](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Node JS](https://nodejs.org/en/)
- [Styled-Components](https://styled-components.com/)
- [AWS - S3 storage](https://aws.amazon.com/pt/s3/)
  
 <br />

## **Getting Started**

- Want to simply give it a ride? Access demo by [clicking here](https://repo-provas-front-cybalencar96.vercel.app/)!

- Want to run frontend local not worrying with back? Learn how in README on front repository by [clicking here](https://github.com/cybalencar96/repo-provas-front)!

- Want to run backend local? Keep reading then!

### **Prerequisites**

- npm

<br />

### **Installation**

1.  Clone backend repo

```sh
git clone https://github.com/cybalencar96/repo-provas-back.git
```

2. Install dependencies executing comand in root

```sh
npm i
```

3. Create a .env.dev file in backend root folder with following env variables
```sh
DATABASE_URL=postgres://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/repoprovas

AWS_ACCESS_KEY_ID=YOUR_KEY_ID

AWS_SECRET_ACCESS_KEY=YOUR_SECRET

AWS_DEFAULT_REGION=YOUR_REGION

TYPEORM_DB_URL=postgres://YOUR_USER:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/repoprovas
```

4. Build app

```sh
npm run build
```

5. Create a postgres database named **repoprovas**

```sh 
```
6. Create tables in database

```sh
npm run typeorm migration:run
```

<br />
<br />

### **How to run**

```sh
npm run dev
```

### **Setting up a few values in db**

```sql
INSERT INTO teachers ("name") VALUES ('Mr James');
INSERT INTO teachers ("name") VALUES ('Ms Alice');
INSERT INTO subjects ("name", "period") VALUES ('Matematica', 5);
INSERT INTO subjects ("name", "period") VALUES ('Portugues', 3);
INSERT INTO classes ("teacher_id", "subject_id") VALUES (1,1);
INSERT INTO classes ("teacher_id", "subject_id") VALUES (2,2);
INSERT INTO classes ("teacher_id", "subject_id") VALUES (1,2);
```

<br />
<br />

## **Ready to go!**