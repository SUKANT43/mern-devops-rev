import useCourseStore from '../app/courseStore';

function CourseList() {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => toggleCourseStatus(course.id)}
              style={{
                textDecoration: course.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {course.title}
            </span>
            <button onClick={() => removeCourse(course.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
