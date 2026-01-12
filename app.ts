import { addCourse, getActiveCourses } from "./DAL/courseS.ts"
import { sequelize } from "./DBconnction/sequlizeDB.ts"

await addCourse({ name: "SQL Basics", hours: 20, is_active: true })
await addCourse({ name: "Python Intro", hours: 30, is_active: true })
await addCourse({ name: "Legacy System", hours: 10, is_active: false })

console.log(`Active courses: `,await getActiveCourses())

await sequelize.close()