-- Active: 1673978214023@@127.0.0.1@3306

CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT NOT NULL
);

DROP TABLE users;

CREATE TABLE posts(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL, --need references user.id
    content TEXT NOT NULL,
    likes INTEGER NOT NULL,
    deslikes INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

DROP TABLE posts;

CREATE TABLE likes_deslikes(
    user_id TEXT NOT NULL, -- need references user.id
    post_id TEXT NOT NULL, -- need references post.id
    like INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

DROP TABLE likes_deslikes;

INSERT INTO users (id, name, email, password, role, created_at)
VALUES 
("u01", 'Mailson', 'mailson@mailson.com', '123456', 'admin', DATETIME()),
("u02", 'Andrade', 'andrade@andrade.com', '123456', 'admin', DATETIME()),
("u03", 'Cardoso', 'cardoso@cardoso.com', '123456', 'admin', DATETIME()),
 ("u04", 'Marcia', 'marcia@marcia.com', '123456', 'admin', DATETIME()),
 ("u05", 'Freitas', 'freitas@freitas.com', '123456', 'admin', DATETIME());
