import Course from "../DBconnction/sequlizeDB.ts"

interface CourseType {
    name: string,
    hours: number,
    is_active: boolean
}


export async function addCourse(course: CourseType) {
    const res = await Course.create({ ...course })
    console.log(res.toJSON());
}
// await addCourse({ name: `Math`, hours: 120, is_active: true })

export async function getActiveCourses() {
    const res = await Course.findAll({ where: { is_active: true } })
    const jsonRes = res.map((course) => course.toJSON())
    return jsonRes
}
// await getActiveCourses()