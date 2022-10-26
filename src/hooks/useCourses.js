import {useMemo} from "react";


export const useSortedCourses = (courses, sort) => {
    const sortedCourses = useMemo(() => {

        if(sort) {
            return [...courses].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return courses;
    }, [sort, courses])

    return sortedCourses;
}

export const useCourses = (courses, sort, query) => {
    const sortedCourses = useSortedCourses(courses, sort);

    const sortedAndSearchedCourses = useMemo(() => {
        console.log('asdas')
        return sortedCourses.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedCourses])
    return sortedAndSearchedCourses;
}