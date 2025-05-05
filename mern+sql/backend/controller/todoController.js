const {pool}=require('../config/db')

const getTodos=async(req,res)=>{
    const query='SELECT * FROM todos'
    try{
        const[rows]=await pool.execute(query)
       return res.status(200).json(rows)
    }
    catch(e){
        return res.status(500).json({err:e.message})
    }

}

const newTodo = async (req, res) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Task is required' });
    }
  
    const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
    try {
      const [result] = await pool.execute(query, [title, false]);
      return res.status(201).json({ id: result.insertId, title, completed: false });
    } catch (e) {
      console.error('Error inserting todo:', e);
      return res.status(500).json({ error: e.message });
    }
  };

  const editTodo = async (req, res) => {
    const { id } = req.params;           
    const { title } = req.body;
  
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
  
    const query = 'UPDATE todos SET title = ? WHERE id = ?';
    try {
      const [result] = await pool.execute(query, [title, id]);
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      return res.status(200).json({ id, title });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
  
  const deleteTodo = async (req, res) => {
    const { id } = req.params;
  
    const query = 'DELETE FROM todos WHERE id = ?';
    try {
      const [result] = await pool.execute(query, [id]);
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      return res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
  
  module.exports = { getTodos, newTodo, editTodo, deleteTodo };
  
  


module.exports={getTodos,newTodo,editTodo,deleteTodo}