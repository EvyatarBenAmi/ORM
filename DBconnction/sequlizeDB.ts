import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("courses_db", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: false
})

const Course = sequelize.define("Course", {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false },
    hours: { type: DataTypes.INTEGER, allowNull: false },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true }
})

await Course.sync()

try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error)
}




export default Course