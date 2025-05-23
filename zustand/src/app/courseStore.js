import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// ...rest of your code remains the same

const courseStore = (set) => ({
  courses: [],

  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },

  removeCourse: (id) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    }));
  },

  toggleCourseStatus: (id) => {
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, completed: !c.completed } : c
      ),
    }));
  },
  
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: 'courses',
    })
  )
);

export default useCourseStore;
