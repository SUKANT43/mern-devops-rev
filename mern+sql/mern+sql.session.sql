select * from todos;

INSERT INTO todos (title) 
VALUES 
('Buy groceries'),
('Complete Java assignment'),
('Clean the house'),
('Attend team meeting'),
('Read a book'),
('Call the doctor'),
('Pay electricity bill'),
('Finish React.js project'),
('Go for a run'),
('Organize files');


DESCRIBE TABLE todos;
CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);