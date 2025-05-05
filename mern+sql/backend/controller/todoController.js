const {pool}=require('../config/db')

const getTodos=async(req,res)=>{
    const query='SELECT * FROM todos'
    try{
        const[rows,fields]=await pool.execute(query)
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
  


module.exports={getTodos,newTodo}