import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';
//persist is used to store the data in local storag

const courseStore = (set) => ({
  courses: [], // initial state

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
});


//state is used to store old value in the array