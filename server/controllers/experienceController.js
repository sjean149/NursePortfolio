const pool = require('../config/db')

const getExperiences = async (req, res) => {
  try{
      const result = await pool.query(`
        SELECT 
        id, 
        position, 
        organization, 
        start_date, 
        end_date, 
        description  
        FROM experiences 
        ORDER BY start_date DESC
        `)

        res.json(result.rows);
  } catch (error) {
      console.error("Error fetching the experiences:", error);
      res.status(500).json({
        message: "Failed to fetch experiences",
      });
  }
}

module.exports = {
  getExperiences
};